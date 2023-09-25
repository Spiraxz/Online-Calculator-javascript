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
    Lsample = sample[:Lbrack]
    
    Rsample = sample[Rbrack+1:]

  
    if len(Rsample)!=0:
     if Rsample[0]=="(" or Rsample[0].isdigit()==True:
         Rsample="*"+Rsample
    
    if len(Lsample)!=0 :
      if Lsample[-1]==")" or Lsample[-1].isdigit()==True :
        Lsample=Lsample+"*"   


    fullstring = Lsample+subsample+Rsample

    if "(" in fullstring:
       fullstring=brackets(fullstring)

    return fullstring

x=brackets("(5)")
print(x)