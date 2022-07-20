
import java.util.Scanner;

public class Bscan {
   
    public static void main (String[] args){
        
        Scanner scanner = new Scanner(System.in);
        System.out.println("Qual é seu nome? ");
        String name = scanner.nextLine();

        System.out.println("Hello "+name);

    }
}
