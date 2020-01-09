#coding=utf-8
x = input("Podaj pesel ")
while ((len(x)<11 or len(x)>11) or x.isdigit()==False or int(x[4:6])<1 or int(x[4:6])>31):
    if (len(x) < 11 and x.isdigit()==True):
        x = input("Pesel jest za krótki ")
    elif(len(x)>11 and x.isdigit()==True):
        x = input("Pesel jest za długi ")
    elif(x.isdigit() == False):
        x = input("Pesel zawiera nie poprawne znaki ")
    elif(int(x[4:6])<1 or int(x[4:6])>31):
        x = input("Nie poprawny pesel. Podaj jeszcze raz: ")

YY = int(x[:2])
MM = int(x[2:4])
DD = int(x[4:6])
PPPP = int(x[9])

if ((PPPP % 2 )== 0):
    p = "kobietą"
else:
    p = "mężczyzną"

if(81<=MM<=92):
    YY = "18"+str(YY)
elif(1<=MM<=12):
    YY ="19"+str(YY)
elif(21<=MM<=32):
    YY ="20"+str(YY)
elif(41<=MM<=52):
    YY ="21"+str(YY)
elif(61<=MM<=72):
    YY = "22"+str(YY)
m = ["Stycznia", "Lutego", "Marca", "Kwietnia", "Maja", "Czerwca", "Lipca", "Sierpnia", "Września", "Października", "Listopada", "Grudnia"]

if(MM == 81 or MM == 1 or MM == 21 or MM == 41 or MM == 61):
    MM = m[0]
elif(MM == 82 or MM == 2 or MM ==22 or MM==42 or MM ==62):
    MM = m[1]
elif(MM == 83 or MM == 3 or MM == 23 or MM == 43 or MM == 63):
    MM= m[2]
elif(MM==84 or MM == 4 or MM == 24 or MM == 44 or MM == 64):
    MM = m[3]
elif(MM == 85 or MM == 5 or MM == 25 or MM == 45 or MM == 65):
    MM == m[4]
elif(MM == 86 or MM == 6 or MM == 26 or MM == 46 or MM == 66):
    MM = m[5]
elif(MM == 87 or MM == 7 or MM == 27 or MM == 47 or MM == 67):
    MM = m[6]
elif(MM == 88 or MM ==8 or MM == 28 or MM == 48 or MM == 68):
    MM = m[7]
elif(MM == 89 or MM == 9 or MM == 29 or MM == 49 or MM == 69):
    MM = m[8]
elif(MM==90 or MM == 10 or MM == 30 or MM == 50 or MM == 70):
    MM =m[9]
elif(MM==91 or MM == 11 or MM == 31 or MM == 51 or MM == 71):
    MM = m[10]
elif(MM==92 or MM == 12 or MM == 32 or MM == 52 or MM == 72):
    MM = m[11]
print("Urodziłeś się " + str(DD) + " " + MM + " " +str(YY) +". Oraz jesteś " + p)
input("Wcisnij ENTER by zakończyć")


