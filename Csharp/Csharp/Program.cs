using Csharp.Checks;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Csharp
{
    class Program
    {
        static void Main(string[] args)
        {
            CheckPesel cp = new CheckPesel();
            CheckYear cy = new CheckYear();
            CheckMonth cm = new CheckMonth();
            CheckGender cg = new CheckGender();
            string p = "";
            bool test;
            Console.WriteLine("Podaj Pesel");
            p = Console.ReadLine();
            test = cp.isDigitPesel(p) & cp.correctLength(p);
            while (!test)
            {
                Console.WriteLine("Pesel nie poprwany, spróbuj ponownie");
                p = Console.ReadLine();
                test = cp.isDigitPesel(p) & cp.correctLength(p);
            }

            Console.WriteLine("");
            Console.WriteLine("Urodzi³eœ siê {0}{1} {2} {3}", p[4], p[5], cm.check(p), cy.Check(p));
            Console.WriteLine("Twoja p³eæ to {0}", cg.check(p));


            Console.WriteLine("Wcisnij dowolny klawisz by zakoñczyæ");
            Console.ReadKey();
        }
    }

}
