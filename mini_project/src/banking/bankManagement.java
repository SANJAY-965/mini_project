package banking;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.SQLIntegrityConstraintViolationException;
import java.sql.Statement;
import java.util.Scanner;

public class bankManagement {
    private static final int NULL = 0;
    private static final int DEFAULT_INITIAL_BALANCE = 1000;

    static Connection con = connection.getConnection();
    static String sql = "";
    public static boolean createAccount(String name, int passCode) {
        try {
            // Validation
            if (name.isEmpty() || passCode == NULL) {
                System.out.println("All Fields Required!");
                return false;
            }

            Scanner scanner = new Scanner(System.in);
            System.out.print("Enter Initial Balance (Default: 1000): ");
            int initialBalance = scanner.nextInt();

            if (initialBalance <= 0) {
                initialBalance = DEFAULT_INITIAL_BALANCE;
                System.out.println("Invalid initial balance, setting to default value: 1000");
            }

            // Query
            String sql = "INSERT INTO customer (cname, balance, pass_code) VALUES (?, ?, ?)";
            PreparedStatement ps = con.prepareStatement(sql);
            ps.setString(1, name);
            ps.setInt(2, initialBalance);
            ps.setInt(3, passCode);

            // Execution
            int rowsAffected = ps.executeUpdate();
            if (rowsAffected == 1) {
                System.out.println(name + ", Now You're Logged In!");
                System.out.println("Initial Deposit of " + initialBalance + " made.");
                return true;
            } else if (rowsAffected == 0) {
                System.out.println("ERR: Account Creation Failed!");
                return false;
            } else {
                System.out.println("ERR: Multiple Rows Inserted (" + rowsAffected + ")");
                return false;
            }
        } catch (SQLIntegrityConstraintViolationException e) {
            System.out.println("ERR: Username Not Available!");
        } catch (SQLException e) {
            e.printStackTrace();
            System.out.println("ERR: Account Creation Failed!");
        }

        return false;
    }

    public static boolean loginAccount(String name, int passCode) {
        try {
            // Validation
            if (name.isEmpty() || passCode == NULL) {
                System.out.println("All Fields Required!");
                return false;
            }

            // Query
            sql = "SELECT * FROM customer WHERE cname = ? AND pass_code = ?";
            PreparedStatement ps = con.prepareStatement(sql);
            ps.setString(1, name);
            ps.setInt(2, passCode);
            ResultSet rs = ps.executeQuery();

            if (rs.next()) {
                // After login menu-driven interface method
                int senderAc = rs.getInt("ac_no");
                BufferedReader sc = new BufferedReader(new InputStreamReader(System.in));

                while (true) {
                    try {
                        System.out.println("Hello, " + rs.getString("cname"));
//                        System.out.println("1)Transfer Money");
                        System.out.println("1)View Balance");
                        System.out.println("2)Fund Transfer");
                        System.out.println("3)Bill Payment");
                        System.out.println("4)Account Statement");
                        System.out.println("5)Logout");

                        System.out.print("Enter Choice: ");
                        int ch = Integer.parseInt(sc.readLine());

                        switch (ch) {
                            case 1:
                                getBalance(senderAc);
                                break;
                            case 2:
                                System.out.print("Enter Receiver A/c No: ");
                                int receiverAcFT = Integer.parseInt(sc.readLine());
                                System.out.print("Enter Amount: ");
                                int amountFT = Integer.parseInt(sc.readLine());

                                if (fundTransfer(senderAc, receiverAcFT, amountFT)) {
                                    System.out.println("MSG: Fund Transfer Successful!\n");
                                } else {
                                    System.out.println("ERR: Fund Transfer Failed!\n");
                                }
                                break;
                            case 3:
                                System.out.print("Enter Bill Type: ");
                                String billType = sc.readLine();
                                System.out.print("Enter Amount: ");
                                int amountBP = Integer.parseInt(sc.readLine());

                                if (billPayment(senderAc, billType, amountBP)) {
                                    System.out.println("MSG: Bill Payment Successful!\n");
                                } else {
                                    System.out.println("ERR: Bill Payment Failed!\n");
                                }
                                break;
                            case 4:
                                accountStatement(senderAc);
                                break;
                            case 5:
                                System.out.println("Logging out...");
                                return true;
                            default:
                                System.out.println("Err: Enter Valid Input!\n");
                                break;
                        }
                    } catch (Exception e) {
                        e.printStackTrace();
                    }
                }
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }

        return false;
    }
    

    public static void getBalance(int acNo) {
        try {
            // Query
            sql = "SELECT * FROM customer WHERE ac_no = ?";
            PreparedStatement ps = con.prepareStatement(sql);
            ps.setInt(1, acNo);
            ResultSet rs = ps.executeQuery();

            System.out.println("-----------------------------------------------------------");
            System.out.printf("%12s %10s %10s\n", "Account No", "Name", "Balance");

            // Execution
            while (rs.next()) {
                System.out.printf("%12d %10s %10d.00\n", rs.getInt("ac_no"), rs.getString("cname"),
                        rs.getInt("balance"));
            }
            System.out.println("-----------------------------------------------------------\n");
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    public static boolean fundTransfer(int senderAc, int receiverAc, int amount) throws SQLException {
        try {
            if (receiverAc == NULL || amount == NULL) {
                System.out.println("All Fields Required!");
                return false;
            }

            con.setAutoCommit(false);
            // Check sender's balance
            sql = "SELECT * FROM customer WHERE ac_no = ?";
            PreparedStatement ps = con.prepareStatement(sql);
            ps.setInt(1, senderAc);
            ResultSet rs = ps.executeQuery();

            if (rs.next()) {
                if (rs.getInt("balance") < amount) {
                    System.out.println("Insufficient Balance!");
                    con.rollback();
                    return false;
                }
            }

            Statement st = con.createStatement();
            // Debit
            sql = "UPDATE customer SET balance = balance - ? WHERE ac_no = ?";
            ps = con.prepareStatement(sql);
            ps.setInt(1, amount);
            ps.setInt(2, senderAc);
            if (ps.executeUpdate() == 1) {
                System.out.println("Amount Debited!");
            }

            // Credit
            sql = "UPDATE customer SET balance = balance + ? WHERE ac_no = ?";
            ps = con.prepareStatement(sql);
            ps.setInt(1, amount);
            ps.setInt(2, receiverAc);
            ps.executeUpdate();

            // Record the transaction in the 'transaction' table
            sql = "INSERT INTO transaction (sender_ac, receiver_ac, amount) VALUES (?, ?, ?)";
            ps = con.prepareStatement(sql);
            ps.setInt(1, senderAc);
            ps.setInt(2, receiverAc);
            ps.setInt(3, amount);
            ps.executeUpdate();

            con.commit();
            return true;
        } catch (Exception e) {
            e.printStackTrace();
            con.rollback();
        }
        return false;
    }

    public static boolean billPayment(int acNo, String billType, int amount) {
        try {
            // Validation
            if (acNo == NULL || billType.isEmpty() || amount == NULL) {
                System.out.println("All Fields Required!");
                return false;
            }

            // Query
            String sql = "INSERT INTO bill_payment (ac_no, bill_type, amount) VALUES (?, ?, ?)";
            PreparedStatement ps = con.prepareStatement(sql);
            ps.setInt(1, acNo);
            ps.setString(2, billType);
            ps.setInt(3, amount);

            // Execution
            int rowsAffected = ps.executeUpdate();
            if (rowsAffected == 1) {
                System.out.println("MSG: Bill Payment Successful!");
                System.out.println("Bill Details:");
                System.out.println("Account Number: " + acNo);
                System.out.println("Bill Type: " + billType);
                System.out.println("Amount Paid: " + amount);
                return true;
            } else {
                System.out.println("ERR: Bill Payment Failed!");
                return false;
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return false;
    }


    public static void accountStatement(int acNo) {
        try {
            // Query
            sql = "SELECT * FROM transaction WHERE sender_ac = ? OR receiver_ac = ?";
            PreparedStatement ps = con.prepareStatement(sql);
            ps.setInt(1, acNo);
            ps.setInt(2, acNo);
            ResultSet rs = ps.executeQuery();

            System.out.println("-----------------------------------------------------------");
            System.out.printf("%12s %12s %12s %10s\n", "Transaction ID", "Sender Ac", "Receiver Ac", "Amount");

            // Execution
            while (rs.next()) {
                System.out.printf("%12d %12d %12d %10d.00\n", rs.getInt("id"), rs.getInt("sender_ac"),
                        rs.getInt("receiver_ac"), rs.getInt("amount"));
            }
            System.out.println("-----------------------------------------------------------\n");
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

 
    
    
}