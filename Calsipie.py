from collections import Counter
import sys
#functions starts


def addsub(uinput):
    string = uinput
    n=1
    x=len(string)
    istring =""
    newstring = string
    while(n==1):
        if string[0]=="+":
            newstring=string[1:]
            break
        elif string[0]=="-":
            newstring = "0"+string
            n=0
            break
        else:
            break
    opplist=[] 
    varlist=[]
    istring=""
    for sc in range(int(len(newstring))):
       if newstring[sc] == "+" or newstring[sc] == "-":
          opplist.append(newstring[sc])
       else:
          istring = istring+newstring[sc]
          try:
             if "+" in newstring[sc+1]  or "-" in newstring[sc+1] :
                varlist.append(istring)
                istring = ""
          except:
             varlist.append(istring)
             istring = ""
             break
    varilist = [float(x) for x in varlist]
    l1 = len(opplist)
    l2 = len(varilist)
    if l1 == l2 -1 :
      uresult = 0
      for i in range(l2-1):
            if opplist[i] == "+":
                num1 = varilist[i]
                num2 = varilist[i+1]
                num3 = num1 + num2
                uresult =num3
                varilist [i]=0
                varilist[i+1]=uresult
            else:
                num1 = varilist[i]
                num2 = varilist[i+1]
                num3 = num1 - num2
                uresult =num3
                varilist [i]=0
                varilist[i+1]=uresult
    uresult=float(uresult)
    if uresult.is_integer() == True:
       return int(uresult)  
    else:
           return uresult
        
def multi(uinput):
  string = uinput
  z=1
  a= string.find("*")
  var1=string[:a]
  if string[a+1] == "-":
     z= -1
     var2=string[a+2:]
     
  else:
    z=1
    var2=string[a+1:]
    
  sindex_a_l = 0
  sindex_a_r = len(var1)-1
  for i in range(len(var1)-1,-1,-1):
    if(var1[i].isalnum()==True  or  var1[i]=="."):
        continue
    else :
        sindex_a_l = i+1
        break
    

  sindex_b_l = 0
  sindex_b_r = len(var2)-1
  for i in range(0,len(var2)-1):
   if(var2[i].isalnum()==True or  var2[i]=="."):
      continue
   else :
      sindex_b_r = i-1
      break

  n1 = var1[sindex_a_l:sindex_a_r+1]
  n2= var2[sindex_b_l:sindex_b_r+1]
  str(n1)
  str(n2)
  num1=float(n1)
  num2=float(n2)
  num3= num1*z*num2
  num3 = str(num3)
  leftstring = var1[0:sindex_a_l]
  rightstring = var2[sindex_b_r+1:]

  fullstring = leftstring+num3+rightstring
 
  fullstring= fullstring.replace("--", "+",1)
  fullstring= fullstring.replace("+-","-",1)
  if("*" in fullstring):
     return multi(fullstring)
  else:
     return fullstring
  

  


def expcheck(sinput):
    obj1=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','u','r','s','t','u','v','w','x','y','z']
    obj2=[x.upper() for x in obj1]  
    obj3=";?\"\',<>?\:}{[]@!$#&_=|"
    count = Counter(sinput)
    lbcount = count["("]
    rbcount = count[")"]
    for x in range(0,len(sinput)):
        if (lbcount != rbcount) :
          print("Invalid expression")
          return 1
        elif (sinput[x] in obj1) :
          print("Invalid expression")
          return 1
        elif (sinput[x] in obj2) :
            print("Invalid expression")
            return 1

        elif (sinput[x] in obj3) :
            print("Invalid expression")
            return 1
        elif (userinput[x].isalpha() == True):
            print("Invalid expression")
            return 1

    return 0


def normalise(uresult):
    res =float(uresult)
    if res.is_integer() == True:
       return int(res)  
    else:
           return res

def bodmas(userinput):


    exp = str(userinput)

    if("("in exp):
        result = brackets(exp)
        return bodmas(result)
    elif "/" in exp:
        result= divide(exp)
        x=str(bodmas(result))
        return str(x)

    elif "*" in exp:
        result = multi(exp)
        x=str(bodmas(result))
        return str(x)
    elif "+" in exp or "-" in exp:
        result = addsub(exp)
        return result
    else:
        
        return str(exp)




def brackets(userinput):
    sample = str(userinput)
    size = len(sample)
    Lbrack=0
    Rbrack=0
    c=0
    for i in range(0,size,1):
        if sample[i]=="(": 
            c=c+1
  
            if c==1:
                Lbrack=i
            
        elif sample[i]==")":
            
            if c==1:
                Rbrack=i 
            c=c-1   
      
    subsample=sample[Lbrack+1:Rbrack]
    subsample=bodmas(subsample)
    Lsample = sample[:Lbrack]
    
    Rsample = sample[Rbrack+1:]

  
    if len(Rsample)!=0:
     if Rsample[0]=="(" or Rsample[0].isdigit()==True:
         Rsample="*"+Rsample
    
    if len(Lsample)!=0 :
      if Lsample[-1]==")" or Lsample[-1].isdigit()==True :
        Lsample=Lsample+"*"   


    fullstring = Lsample+str(subsample)+Rsample

    if "(" in fullstring:
       fullstring=brackets(fullstring)

    return fullstring



def divide(uinput):
  string = uinput
  z=1
  a= string.find("/")
  var1=string[:a]
  if string[a+1] == "-":
     z= -1
     var2=string[a+2:]
     
  else:
    z=1
    var2=string[a+1:]
    
  sindex_a_l = 0
  sindex_a_r = len(var1)-1
  for i in range(len(var1)-1,-1,-1):
    if(var1[i].isalnum()==True  or  var1[i]=="."):
        continue
    else :
        sindex_a_l = i+1
        break
    

  sindex_b_l = 0
  sindex_b_r = len(var2)-1
  for i in range(0,len(var2)-1):
   if(var2[i].isalnum()==True or  var2[i]=="."):
      continue
   else :
      sindex_b_r = i-1
      break

  n1 = var1[sindex_a_l:sindex_a_r+1]
  n2= var2[sindex_b_l:sindex_b_r+1]
  str(n1)
  str(n2)
  num1=float(n1)
  num2=float(n2)
  num3= num1/(z*num2)
  num3 = str(num3)
  leftstring = var1[0:sindex_a_l]
  rightstring = var2[sindex_b_r+1:]

  fullstring = leftstring+num3+rightstring
 
  fullstring= fullstring.replace("--", "+",1)
  fullstring= fullstring.replace("+-","-",1)
  if("*" in fullstring):
     return multi(fullstring)
  else:
     return fullstring
  

#functions ends

#main


while True:
      userinput=str(input("Enter an Expression : "))
      userinput = userinput.replace(" ","")
      userinput = userinput.replace("÷","/")
      check = expcheck(userinput)
      if check == 1:
          continue
      elif check ==0 :
            main_result = bodmas(userinput)
            print("Result :",normalise(main_result))