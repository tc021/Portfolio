using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Csharp
{
    class CheckPesel
    {
        public bool isDigitPesel(string p)
        {
            bool check=true;
            foreach (char x in p)
            {
                if (!Char.IsNumber(x))
                {
                    check = false;
                    break;
                }
            }
            return check;
        }
        public bool correctLength(string p)
        {
            if (p.Length == 11)
            {
                return true;
            }
            return false;
        }
    }
}
