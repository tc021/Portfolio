using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Csharp.Checks
{
    class CheckGender : Program
    {
        public string check(string p)
        {
            char firstDigit = p[6];
            char secondDigit = p[7];
            char thirdDigit = p[8];
            char fourthDigit = p[9];

            string temp = string.Format("{0}{1}{2}{3}", firstDigit, secondDigit, thirdDigit, fourthDigit);
            int PPPP = Convert.ToInt32(temp);
            if (PPPP % 2 == 0)
            {
                return "kobieta";
            }
            else
            {
                return "mężczyzna";
            }
            
        }
    }
}
