//package banking;
//
//import java.io.BufferedReader;
//import java.io.IOException;
//import java.io.InputStreamReader;
//
//public class bank {
//	public static void main(String args[]) //main class of bank
//		throws IOException
//	{
//
//		BufferedReader sc = new BufferedReader(
//			new InputStreamReader(System.in));
//		String name = "";
//		int pass_code;
//		int ac_no;
//		int ch;
//
//		while (true) {
//			System.out.println(
//				"\n ->|| Welcome to IndianBank ||<- \n");
//			System.out.println("1)Create Account");
//			System.out.println("2)Login Account");
//
//			try {
//				System.out.print("\n Enter Input:"); //user input
//				ch = Integer.parseInt(sc.readLine());
//
//				switch (ch) {
//				case 1:
//					try {
//						System.out.print(
//							"Enter Unique UserName:");
//						name = sc.readLine();
//						System.out.print(
//							"Enter New Password:");
//						pass_code = Integer.parseInt(
//							sc.readLine());
//
//						if (bankManagement.createAccount(
//								name, pass_code)) {
//							System.out.println(
//								"MSG : Account Created Successfully!\n");
//						}
//						else {
//							System.out.println(
//								"ERR : Account Creation Failed!\n");
//						}
//					}
//					catch (Exception e) {
//						System.out.println(
//							" ERR : Enter Valid Data::Insertion Failed!\n");
//					}
//					break;
//
//				case 2:
//					try {
//						System.out.print(
//							"Enter UserName:");
//						name = sc.readLine();
//						System.out.print(
//							"Enter Password:");
//						pass_code = Integer.parseInt(
//							sc.readLine());
//
//						if (bankManagement.loginAccount(
//								name, pass_code)) {
//							System.out.println(
//								"MSG : Logout Successfully!\n");
//						}
//						else {
//							System.out.println(
//								"ERR : login Failed!\n");
//						}
//					}
//					catch (Exception e) {
//						System.out.println(
//							" ERR : Enter Valid Data::Login Failed!\n");
//					}
//
//					break;
//
//				default:
//					System.out.println("Invalid Entry!\n");
//				}
//
//				if (ch == 5) {
//					System.out.println(
//						"Exited Successfully!\n\n Thank You :)");
//					break;
//				}
//			}
//			catch (Exception e) {
//				System.out.println("Enter Valid Entry!");
//			}
//		}
//		sc.close();
//	}
//}
package banking;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

abstract class BankAccount {
    protected String name;
    protected int passCode;
    protected int accountNumber;
    protected int balance;

    public BankAccount(String name, int passCode) {
        this.name = name;
        this.passCode = passCode;
        this.accountNumber = -1; // Not yet assigned
        this.balance = 0;
    }

    // Abstract methods to be implemented by subclasses
    public abstract boolean createAccount() throws IOException;
    public abstract boolean loginAccount();

    public void getAccountBalance() {
        System.out.println("-----------------------------------------------------------");
        System.out.printf("%12s %10s %10s\n", "Account No", "Name", "Balance");
        System.out.printf("%12d %10s %10d.00\n", accountNumber, name, balance);
        System.out.println("-----------------------------------------------------------\n");
    }

    public boolean transferMoney(int receiverAc, int amount) {
        // Common implementation for money transfer
        // ...
        return false;
    }
}

class SavingsAccount extends BankAccount {
    private static final int DEFAULT_INITIAL_BALANCE = 1000;

    public SavingsAccount(String name, int passCode) {
        super(name, passCode);
    }

    @Override
    public boolean createAccount() throws IOException {
        // Implementation for creating a savings account
        // ...
        return false;
    }

    @Override
    public boolean loginAccount() {
        // Implementation for logging into a savings account
        // ...
        return false;
    }

    // Additional methods specific to SavingsAccount can be implemented here
}

class CurrentAccount extends BankAccount {
    private int overdraftLimit;

    public CurrentAccount(String name, int passCode, int overdraftLimit) {
        super(name, passCode);
        this.overdraftLimit = overdraftLimit;
    }

    @Override
    public boolean createAccount() throws IOException {
        // Implementation for creating a current account
        // ...
        return false;
    }

    @Override
    public boolean loginAccount() {
        // Implementation for logging into a current account
        // ...
        return false;
    }

    // Additional methods specific to CurrentAccount can be implemented here
}

public class bank {
    public static void main(String args[]) throws IOException {
        BufferedReader sc = new BufferedReader(new InputStreamReader(System.in));
        String name = "";
        int pass_code;
        int ch;

        while (true) {
            System.out.println("\n ->|| Welcome to IndianBank ||<- \n");
            System.out.println("1)Create Account");
            System.out.println("2)Login Account");

            try {
                System.out.print("\n Enter Input:"); //user input
                ch = Integer.parseInt(sc.readLine());

                switch (ch) {
                    case 1:
                        try {
                        	System.out.print(
        							"Enter Unique UserName:");
        						name = sc.readLine();
        						System.out.print(
        							"Enter New Password:");
        						pass_code = Integer.parseInt(
        							sc.readLine());

        						if (bankManagement.createAccount(
        								name, pass_code)) {
        							System.out.println(
        								"MSG : Account Created Successfully!\n");
        						}
        						else {
        							System.out.println(
        								"ERR : Account Creation Failed!\n");
        						}
                        } 
                        catch (Exception e) {
                            System.out.println(" ERR : Enter Valid Data::Insertion Failed!\n");
                        }
                        break;

                    case 2:
                        try {
                        	System.out.print(
        							"Enter UserName:");
        						name = sc.readLine();
        						System.out.print(
        							"Enter Password:");
        						pass_code = Integer.parseInt(
        							sc.readLine());
        
        						if (bankManagement.loginAccount(
        								name, pass_code)) {
        							System.out.println(
        								"MSG : Logout Successfully!\n");
        						}
        						else {
        							System.out.println(
        								"ERR : login Failed!\n");
        						}
                        } catch (Exception e) {
                            System.out.println(" ERR : Enter Valid Data::Login Failed!\n");
                        }

                        break;

                    default:
                        System.out.println("Invalid Entry!\n");
                }

                if (ch == 5) {
                    System.out.println("Exited Successfully!\n\n Thank You :)");
                    break;
                }
            } catch (Exception e) {
                System.out.println("Enter Valid Entry!");
            }
        }
        sc.close();
    }
}
