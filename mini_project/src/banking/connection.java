//package banking;
// 
//import java.sql.Connection;
//import java.sql.DriverManager;
//// Global connection Class
//public class connection {
//    static Connection con;
//    public static Connection getConnection()
//    {
//        try {
//            
//            
//            String mysqlJDBCDriver
//                = "com.mysql.cj.jdbc.Driver";
//            String url
//                = "jdbc:mysql://localhost:3306/bankproject"; 
//            String user = "root";       
//            String pass = "Hockey47@28102";  
//             Class.forName(mysqlJDBCDriver);
//            con = DriverManager.getConnection(url, user,
//                                              pass);
//        }
//        catch (Exception e) {
//            System.out.println("Connection Failed!");
//        }
// 
//        return con;
//    }
//}
package banking;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class connection {
    private static Connection con;

    public static Connection getConnection() {
        try {
            if (con == null || con.isClosed()) {
                String mysqlJDBCDriver = "com.mysql.cj.jdbc.Driver";
                String url = "jdbc:mysql://localhost:3306/bs";
                String user = "root";
                String pass = "Tiger@123";
                Class.forName(mysqlJDBCDriver);
                con = DriverManager.getConnection(url, user, pass);
            }
        } catch (ClassNotFoundException | SQLException e) {
            e.printStackTrace();
        }

        return con;
    }
}
