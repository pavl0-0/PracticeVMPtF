def task1 ():
    for i in range(1, 11):
        print(i)

task1()

print("=========================================================")

def task2 ():
    num1 = float(input("Перше число: "))
    num2 = float(input("Друге число: "))
    num3 = float(input("Третє число: "))

    average = (num1 + num2 + num3) / 3
    
    print(f"Середнє арефметичне введених чисел: {average}")

task2()

print("=========================================================")

def task3 ():
    birthYear = int(input("Введіть рік вашого народження: "))
    year = 2026
    age = year - birthYear

    print(f"Ваш вік - {age}")

task3 ()

print("=========================================================")

class Book():
    def __init__(self, name, author, year):
        self.name = name
        self.author = author
        self.year = year
    
    def __str__(self):
        return f"Книга: {self.name}, {self.author}, {self.year}"

book = Book("Кобзар", "Тарас Шевченко", 2025)

print(book)