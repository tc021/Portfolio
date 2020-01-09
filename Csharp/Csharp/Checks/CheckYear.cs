using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Csharp.Checks
{
    class CheckYear : Program
    {
        public string Check(string p)
        {
            string year = "";
            char firstDigit = p[0]; //pierwsza cyfra roku
            char secDigit = p[1]; //druga cyfra roku
            char fdm = p[2]; // pierwsza cyfra miesiąca
            char sdm = p[3]; //druga cyfra miesiąca

            string temp1 = string.Format("{0}{1}", fdm, sdm);
            string temp2 = string.Format("{0}{1}", firstDigit, secDigit);
            int month = Convert.ToInt32(temp1);

            if (month >= 81 && month <= 91)
            {
                year = "18" + temp2;
            }
            else if(month >= 1 && month <= 12){
                year = "19" + temp2;
            }
            else if(month >=21 && month <= 32)
            {
                year = "20" + temp2;
            }
            else if(month >= 41 && month <= 52)
            {
                year = "21" + temp2;
            }
            else if (month>=61 && month <= 72)
            {
                year = "22" + temp2;
            }

            return year;
        }
    }
}
