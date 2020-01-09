using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Csharp.Checks
{
    class CheckMonth
    {
        public string check(string p)
        {
            string month = "";
            char fdm = p[2]; // pierwsza cyfra miesiąca
            char sdm = p[3]; //druga cyfra miesiąca
            string temp = fdm.ToString() + sdm.ToString();
            int monthTemp = Convert.ToInt32(temp);
            string[] months = { "Stycznia", "Lutego", "Marca", "Kwietnia", "Maja", "Czerwca", "Lipca", "Sierpnia", "Września", "Października", "Listopada", "Grudnia" };
            if (monthTemp == 81 || monthTemp == 01 || monthTemp == 21 || monthTemp == 41 || monthTemp == 61)
            {
                month = months[0];
            }
            else if (monthTemp == 82 || monthTemp == 02 || monthTemp == 22 || monthTemp == 42 || monthTemp == 62)
            {
                month = months[1];
            }
            else if (monthTemp == 83 || monthTemp == 03 || monthTemp == 23 || monthTemp == 43 || monthTemp == 63)
            {
                month = months[2];
            }
            else if (monthTemp == 84 || monthTemp == 04 || monthTemp == 24 || monthTemp == 44 || monthTemp == 64)
            {
                month = months[3];
            }
            else if (monthTemp == 85 || monthTemp == 05 || monthTemp == 25 || monthTemp == 45 || monthTemp == 65)
            {
                month = months[4];
            }
            else if (monthTemp ==  86 || monthTemp == 06 || monthTemp == 26 || monthTemp == 46 || monthTemp == 66)
            {
                month = months[5];
            }
            else if (monthTemp == 87 || monthTemp == 07 || monthTemp == 27 || monthTemp == 47 || monthTemp == 67)
            {
                month = months[6];
            }
            else if (monthTemp == 88 || monthTemp == 08 || monthTemp == 28 || monthTemp == 48 || monthTemp == 68)
            {
                month = months[7];
            }
            else if (monthTemp == 89 || monthTemp == 09 || monthTemp == 29 || monthTemp == 49 || monthTemp == 69)
            {
                month = months[8];
            }
            else if (monthTemp == 90 || monthTemp == 10 || monthTemp == 30 || monthTemp == 50 || monthTemp == 70)
            {
                month = months[9];
            }
            else if (monthTemp == 91 || monthTemp == 11 || monthTemp == 31 || monthTemp == 51 || monthTemp == 71)
            {
                month = months[10];
            }
            else if (monthTemp == 92 || monthTemp == 12 || monthTemp == 32 || monthTemp == 52 || monthTemp == 72)
            {
                month = months[11];
            }
            return month;
        }
    }
}
