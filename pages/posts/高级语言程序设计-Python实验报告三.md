---
title: 高级语言程序设计-Python实验报告三
author: lkyu
tags:
- Python
- 作业
categories:
- 作业
date: 2024-1-7
updated:  2024-1-7
---

## 一、实验目的

1. 掌握文件的操作方法，包括打开、关闭、读写等；

2. 熟悉PIL库的使用；

3. 通过一个综合性的验证实验，提高综合运用了基本及组合数据类型，程序结构控制、函数、文件等知识的能力。

## 二、实验内容

1. 编写程序生成两个txt文件，一个保存仅最后一次程序运行的时间，一个包括程序每次运行的时间。程序运行时，除了完成时间的保存，同时将文件的内容打印出来`(print)`。

2. 找一张自己的彩色照片，编写程序实现如下功能，保存为新的图像

   1. 生成一个十分一大小的“缩略图”

   2. 将图片旋转30度
   3. 取出g通道进行逐像素处理，对于<100的像素，调整为原来的0.5倍，对于>=100的像素，调整为原来的2倍
3. 综合性的验证实验：学生信息管理系统，综合运用基本及组合数据类型，程序结构控制、函数、文件等内容，实现：1.添加学生信息；2.修改学生信息；3.显示所有学生信息；4.保存数据功能。

## 三、实验程序/结果/注释

### 3.1 文本文件读写

编写程序生成两个txt文件，一个保存仅最后一次程序运行的时间，一个包括程序每次运行的时间。程序运行时，除了完成时间的保存，同时将文件的内容打印出来`(print)`。

实验代码如下：

```python
import time

nowTime = time.strftime("%Y-%m-%d %H:%M:%S", time.localtime(time.time()))

f1 = open("./lasttime.txt", "w+")
f1.write(nowTime + "\n")

f2 = open("./eachtime.txt", "a+")
f2.write(nowTime + "\n")

print("本次运行的时间：", nowTime, "\n")

f1.seek(0)
print("文件lasttime.txt的内容：")
for line in f1:
    print(line)
f1.close()

f2.seek(0)
print("文件eachtime.txt的内容：")
for line in f2:
    print(line)
f2.close()

```

运行程序六次，程序输出如下：

```text
本次运行的时间： 2023-11-18 14:09:01 

文件lasttime.txt的内容：
2023-11-18 14:09:01

文件eachtime.txt的内容：
2023-11-18 14:08:38

2023-11-18 14:08:39

2023-11-18 14:08:40

2023-11-18 14:08:41

2023-11-18 14:08:41

2023-11-18 14:09:01
```

### 3.2 图像编辑

找一张自己的彩色照片，编写程序实现如下功能，保存为新的图像：

选定图片如下：

<div style="margin: 0 auto; text-align: center; width: 60%">
<img src="../img/test.png" />
喜多酱(3486x4044)
</div>

#### 生成一个十分一大小的“缩略图”

实验代码如下：

```python
from PIL import Image

im = Image.open("./test.png")
imageSize = im.size
print("原始图片大小：", imageSize)

im.thumbnail((imageSize[0] / 10, imageSize[1] / 10))
print("缩小后的图片大小：", im.size)
im.save("thumbnail.jpg")
```

运行程序，程序输出如下：

```text
原始图片大小： (3486, 4044)
缩小后的图片大小： (348, 404)
```

生成的缩略图如下所示：

<div style="margin: 0 auto; text-align: center; width: 40%">
<img src="../img/thumbnail.png" />
压缩喜多酱(348x404)
</div>

查看图像属性，长宽均为原来的十分之一。

#### 将图片旋转30度

实验代码如下：

```python
from PIL import Image

im = Image.open("./test.png")

im1 = im.rotate(30)
im1.save("./rotate.png")
```

运行程序，生成的图片如下所示：

<div style="margin: 0 auto; text-align: center; width: 60%">
<img src="../img/rotate.png" />
旋转喜多酱
</div>

#### 像素处理

取出g通道进行逐像素处理，对于<100的像素，调整为原来的0.5倍，对于>=100的像素，调整为原来的2倍。

实验代码如下：

```python
from PIL import Image

im = Image.open("./test.png")
r, g, b = im.split()
newg = g.point(lambda i: i * 0.5 if i < 100 else i * 2)

om = Image.merge("RGB", (r, newg, b))

g.save("green.png")

om.save("ChangePoint.png")
```

代码中，将修改过的g通道单独存为图片结果如下：

<div style="margin: 0 auto; text-align: center; width: 60%">
<img src="../img/green.png" />
g通道喜多酱（还原原著）
</div>
合并rgb通道后得到如下图像：

<div style="margin: 0 auto; text-align: center; width: 60%">
<img src="../img/ChangePoint.png" />
喜多酱（崩坏版）
</div>

### 3.3 综合性的验证实验：学生信息管理系统

综合运用基本及组合数据类型，程序结构控制、函数、文件等内容，实现：

1. 添加学生信息；

2. 修改学生信息；

3. 显示所有学生信息；

4. 保存数据功能。

实验代码如下：

```python
import json
import os.path

filename = "studentsInfo.txt"


def menu():
    print("\n==================学生信息管理系统==============")
    print("\t\t1. 添加学生信息")
    print("\t\t2. 修改学生信息")
    print("\t\t3. 显示所有学生信息")
    print("\t\t4. 保存数据")
    print("\t\t0. 退出程序")
    print("================================================")


def insert():
    id = input("请输入ID：")
    name = input("请输入姓名：")
    birthday = int(input("请输入生日："))
    # 将录入的学生信息保存在字典中
    student = {
        "id": id,
        "name": name,
        "birthday": birthday,
    }
    # 将学生信息添加到列表中
    # student_list.append(student)
    save(str(student))
    print("学生信息保存成功")


def modify():
    show()

    with open(filename, "r", encoding="utf-8") as file:
        student_old = file.readlines()

    student_id = input("请输入修改学生的ID：")
    with open(filename, "w", encoding="utf-8") as wfile:
        studentInfo = []
        for item in student_old:
            d = dict(eval(item))
            if d["id"] == student_id:
                print("已经找到学生信息，请修改相关信息")
                d["name"] = input("请输入姓名")
                d["birthday"] = input("请输入生日")
                wfile.write(str(d) + "\n")
                print("修改成功")
            else:
                wfile.write(str(d) + "\n")


def save(data):
    try:
        stu_txt = open(filename, "a", encoding="utf-8")
    except:
        stu_txt = open(filename, "w", encoding="utf-8")
    stu_txt.write(data + "\n")
    stu_txt.close()


def show():
    with open(filename, "r", encoding="utf-8") as file:
        list = []
        student = file.readlines()
        for item in student:
            d = dict(eval(item))
            list.append(d)
    print(json.dumps(list, sort_keys=False, indent=4))


if __name__ == "__main__":
    while True:
        menu()
        choice = int(input("请选择功能："))
        if choice in [0, 1, 2, 3, 4]:
            if choice == 0:
                break
            elif choice == 1:
                insert()
            elif choice == 2:
                modify()
            elif choice == 3:
                show()
            elif choice == 4:
                print("数据位于studentsInfo.txt")

```

运行程序，分别按照显示→添加→修改→保存的顺序测试程序，程序输出如下：

```text
==================学生信息管理系统==============
                1. 添加学生信息
                2. 修改学生信息
                3. 显示所有学生信息
                4. 保存数据
                0. 退出程序
================================================
请选择功能：3 # 此处显示的是文件中已有的数据
[
    {
        "id": "2",
        "name": "2",
        "birthday": 2
    },
    {
        "id": "5",
        "name": "5",
        "birthday": "5"
    },
    {
        "id": "4",
        "name": "4",
        "birthday": 4
    }
]

==================学生信息管理系统==============
                1. 添加学生信息
                2. 修改学生信息
                3. 显示所有学生信息
                4. 保存数据
                0. 退出程序
================================================
请选择功能：1
请输入ID：8
请输入姓名：8
请输入生日：8
学生信息保存成功

==================学生信息管理系统==============
                1. 添加学生信息
                2. 修改学生信息
                3. 显示所有学生信息
                4. 保存数据
                0. 退出程序
================================================
请选择功能：2
[
    {
        "id": "2",
        "name": "2",
        "birthday": 2
    },
    {
        "id": "5",
        "name": "5",
        "birthday": "5"
    },
    {
        "id": "4",
        "name": "4",
        "birthday": 4
    },
    {
        "id": "8",
        "name": "8",
        "birthday": 8
    }
]
请输入修改学生的ID：5
已经找到学生信息，请修改相关信息
请输入姓名555
请输入生日555
修改成功

==================学生信息管理系统==============
                1. 添加学生信息
                2. 修改学生信息
                3. 显示所有学生信息
                4. 保存数据
                0. 退出程序
================================================
请选择功能：3
[
    {
        "id": "2",
        "name": "2",
        "birthday": 2
    },
    {
        "id": "5",
        "name": "555",
        "birthday": "555"
    },
    {
        "id": "4",
        "name": "4",
        "birthday": 4
    },
    {
        "id": "8",
        "name": "8",
        "birthday": 8
    }
]

==================学生信息管理系统==============
                1. 添加学生信息
                2. 修改学生信息
                3. 显示所有学生信息
                4. 保存数据
                0. 退出程序
================================================
请选择功能：4
数据位于studentsInfo.txt

==================学生信息管理系统==============
                1. 添加学生信息
                2. 修改学生信息
                3. 显示所有学生信息
                4. 保存数据
                0. 退出程序
================================================
请选择功能：0
```
