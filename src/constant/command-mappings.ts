import { ICommand } from '../interface/command';

/**
 * Map certain spoken phrases to VS Code commands.
 * Key is the spoken phrase, value the command.
 */
export const COMMAND_MAPPINGS: {[key:string]: ICommand} = {
	down: {
		command: 'cursorMove',
		params: [{
			to: 'down',
		}],
	},
	enter: {
		command: 'acceptSelectedSuggestion',
		if: true, // Todo: Check if suggestion dialog is open. If not, add new line instead.
	},
	left: {
		command: 'cursorMove',
		params: [{
			to: 'left',
		}],
	},
	next: {
		command: 'selectNextSuggestion',
	},
	
	previous: {
		command: 'selectPrevSuggestion',
	},
	right: {
		command: 'cursorMove',
		params: [{
			to: 'right',
		}],
	},
	up: {
		command: 'cursorMove',
		params: [{
			to: 'up',
		}],
	},
	space: {
		command: 'cursorMove',
		params: [{
			to: 'space',
		}],
	},
	nline: {
		command: 'cursorMove',
		params: [{
			to: 'nextBlankLine',
		}],
	},
	pline: {
		command: 'cursorMove',
		params: [{
			to: 'prevBlankLine',
		}],
	},

};

/*
print("Hello World")
-----------------------------------
movie = "Terminator"
number1 = 5
float_number = 12.5
str = "ITPro.ir python course"
-------------------
list = [item1, item2, item3, item4]
list = ["ITPro.ir", 12, 3.5]
---------------------------------
تاپل ها همانند لیست مجموعه ای از آیتم ها را تعریف می کنند، اما با لیست دو تفاوت اصلی دارند:

    آیتم های Tuple داخل () قرار میگرند.
    آیتم های Tuple قابل تغییر نیستند، یعنی Tuple ها در حقیقت Read-Only هستند.
tuple = ("Item1","Item2")
------------------------------
دیکشنری ها نوعی از داده ها هستند که بوسیله ساختار کلید و مقدار مشخص می شوند. یعنی شما برای هر آیتم دیکشنری یک کلید مشخص می کنید و یک مقدار و بعد می توانید بوسیله کلید به مقدار مورد نظر داخل دیکشنری دسترسی داشته باشید. در مثال زیر، یک دیکشنری خیلی ساده تعریف کرده ایم: 
dict = {"name":"Hossein", "age":30,"website":"ITPro.i"}
------------------------------------
def printMessage(firstName,lastName):
    message = "Welcome "+firstName+" "+lastName
  print(message)
--------------------------
public voic int PrintName(string firstName, string lastName)
{
    string message = "Welcome "+firstName+" "+lastName;
    Console.WriteLine(message);
}
-----------------------
# Source code developed by
---------------------
if expression:
    statements
else:
    statements

--------------------------
if expression:
    statements
elif expression:
    statements
elif expression:
    statements
else:
    statements

----------------------------
می توان در زبان پایتون شرط ها را به صورت تو در تو نوشت، یعنی داخل یک شرط if یک شرط if دیگر به صورت زیر تعریف کرد:

if expression:
    if expression:
        statements
    elif expression:
        statements
else
    statements
---------------------------------------
while expression:
    statement(s)


n = 1
while n <= 10:
    print(n)
    n += 1

----------------------------------------------

n = 1
while n <= 10:
    print(n)
    n += 1
else:
    print("End of loop!")
-----------------------------------------------
list = ["item1","item2","item3","item4"]

for item in list:
    print(item)

print("All done.")

-------------------------------------
class Person:
    class body


class Person:
    def __init__(self, firstname, lastname, age):
        self.firstname = firstname
        self.lastname = lastname
        self.age = age


---------------------------

def function_name(parameters):
    statement(s)

def sum(num1,num2):
    print(num1+num2)

def sum(num1,num2):
   return num1 + num2

--------------------------------



*/