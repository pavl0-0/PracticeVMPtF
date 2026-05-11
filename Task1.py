def task1 ():
    for i in range(1, 11):
        print(i)



print("=========================================================")

def task2 ():
    count = int(input("Кількість чисел: "))
    sum = 0
    for i in range (count):
        num = float(input(f"Число {i + 1}: "))
        sum += num

    average = sum / count
    
    print(f"Середнє арефметичне введених чисел: {average}")

task2()

print("=========================================================")

def task3 ():
    birthYear = int(input("Введіть рік вашого народження: "))
    year = 2026
    age = year - birthYear

    print(f"Ваш вік - {age}")



print("=========================================================")

class Book():
    def __init__(self, name, author, year):
        self.name = name
        self.author = author
        self.year = year
    
    def __str__(self):
        return f"Книга: {self.name}, {self.author}, {self.year}"

book = Book("Кобзар", "Тарас Шевченко", 2025)

