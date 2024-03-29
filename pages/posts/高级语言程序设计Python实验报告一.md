---
title: 高级语言程序设计-Python实验报告一
author: lkyu
tags:
    - Python
    - 作业
categories:
    - 作业
date: 2023-11-11
updated: 2023-11-11 20:16:41
description:
---

## 一、实验目的

1. 掌握4种整数进制，浮点数的科学计数法表示

2. 掌握常用数值运算操作符

3. 掌握字符串表示、索引、切片及格式化等方法

4. 掌握利用`if`，`else`，`elif`构建分支结构的方法

5. 掌握利用`for`，`while`构建循环结构及`break`、`continue`进行循环控制的方法

## 二、实验内容

1. 体重计算。月球上人的体重是地球上的16.6667%，假如你在地球上的体重每年增加0.5kg，编写程序输入当前你在地球上的体重，并输出未来10年你在地球和月球上的体重状况。

2. 体重计算续。改写体重计算程序，将未来第10年你在月球上的体重分别采用保留4位有效位的标准浮点形式以及百分形式进行输出。

3. 体重计算再续。改写体重计算程序，将未来第10年你在月球上的体重四舍五入取整，并分别采用二进制、八进制、十进制、十六进制和Unicode字符进行输出。

4. 猜数字游戏。让计算机能够随机产生一个预设数字，范围在0-100之间。让用户通过键盘输入所猜的数，如果大于预设的数，显示“你猜的数字大于正确答案”；小于预设的数，显示“你猜的数字小于正确答案”。如此循环，直至猜中该数，显示“你猜了N次，猜对了，真厉害”，其中N是用户输入数字的次数。

5. 猜数字游戏续。用`for`循环改写猜数字游戏程序，要求用变量`maxtimes`设置允许猜数字的最大次数（比如最多只允许猜6次`maxtimes=6`），并在猜错后提示还有几次机会。（提示，猜对后可使用`break`跳出循环）

## 三、实验程序/结果/注释

### 3.1 体重计算

月球上人的体重是地球上的16.6667%，假如你在地球上的体重每年增加0.5kg，编写程序输入当前你在地球上的体重，并输出未来10年你在地球和月球上的体重状况。

实验代码如下：

```python
initial_weight = eval(input("请输入你的初始体重（公斤)："))
year = 1
earth_weight = initial_weight
moon_weight = earth_weight * 0.165

for year in range(1, 11):
    earth_weight += 0.5
    moon_weight = earth_weight * 0.165
    print("第{}年后地球体重为：{}kg，月球体重为：{}kg".format(year, earth_weight, moon_weight))
    year += 1
```

运行程序，输入初始体重：`80`，程序输出如下：

```text
请输入你的初始体重（公斤)：80
第1年后地球体重为：80.5kg，月球体重为：13.2825kg
第2年后地球体重为：81.0kg，月球体重为：13.365kg
第3年后地球体重为：81.5kg，月球体重为：13.4475kg
第4年后地球体重为：82.0kg，月球体重为：13.530000000000001kg
第5年后地球体重为：82.5kg，月球体重为：13.6125kg
第6年后地球体重为：83.0kg，月球体重为：13.695kg
第7年后地球体重为：83.5kg，月球体重为：13.7775kg
第8年后地球体重为：84.0kg，月球体重为：13.860000000000001kg
第9年后地球体重为：84.5kg，月球体重为：13.9425kg
第10年后地球体重为：85.0kg，月球体重为：14.025kg
```

### 3.2 体重计算续

改写体重计算程序，将未来第10年你在月球上的体重分别采用保留4位有效位的标准浮点形式以及百分形式进行输出。

实验代码如下：

```python
initial_weight = eval(input("请输入你的初始体重（公斤)："))
year = 1
earth_weight = initial_weight
moon_weight = earth_weight * 0.165

for year in range(1, 11):
    earth_weight += 0.5
    moon_weight = earth_weight * 0.165
    year += 1

print("第10年在月球体重为：{:.4f}kg".format(moon_weight))  # 4位有效位的标准浮点形式输出
print("第10年在月球体重为：{:.4%}kg".format(moon_weight))  # 4位有效位的百分形式输出

```

运行程序，输入初始体重：`80`，程序输出如下：

```text
请输入你的初始体重（公斤)：80
第10年后在月球体重为：14.0250kg
第10年后在月球体重为：1402.5000%kg
```

### 3.3 体重计算再续

改写体重计算程序，将未来第10年你在月球上的体重四舍五入取整，并分别采用二进制、八进制、十进制、十六进制和Unicode字符进行输出。

实验代码如下：

```python
initial_weight = eval(input("请输入你的初始体重（公斤)："))
year = 1
earth_weight = initial_weight
moon_weight = earth_weight * 0.165

for year in range(1, 11):
    earth_weight += 0.5
    moon_weight = earth_weight * 0.165
    year += 1

moon_weight = int(round(moon_weight, 0))
print("第10年后在月球体重为：{:b}(2)kg".format(moon_weight))  # 二进制输出
print("第10年后在月球体重为：{:o}(8)kg".format(moon_weight))  # 八进制输出
print("第10年后在月球体重为：{:d}(10)kg".format(moon_weight))  # 十进制输出
print("第10年后在月球体重为：{:x}(16)kg".format(moon_weight))  # 十六进制输出
print("第10年后在月球体重为：{:c}(Unicode)kg".format(moon_weight))  # Unicode输出
```

运行程序，输入初始体重：`80`，程序输出如下：

```text
请输入你的初始体重（公斤)：80
第10年后在月球体重为：1110(2)kg
第10年后在月球体重为：16(8)kg
第10年后在月球体重为：14(10)kg
第10年后在月球体重为：e(16)kg
第10年后在月球体重为：(Unicode)kg
```

### 3.4 猜数字游戏

让计算机能够随机产生一个预设数字，范围在0-100之间。让用户通过键盘输入所猜的数，如果大于预设的数，显示“你猜的数字大于正确答案”；小于预设的数，显示“你猜的数字小于正确答案”。如此循环，直至猜中该数，显示“你猜了N次，猜对了，真厉害”，其中N是用户输入数字的次数。

实验代码如下：

```python
import random

guess = 0
times = 1
secret = random.randint(0, 100)

print("--------欢迎参加猜数字游戏，请开始--------")
while guess != secret:
    guess = int(input("@数字区间0-100，请输入你猜的数字："))
    print("你输入的数字是：", guess)
    if guess == secret:
        print("你猜了{}次，猜对了，真厉害".format(times))
    else:
        if guess < secret:
            print("你猜的数字小于正确答案")
        else:
            print("你猜的数字大于正确答案")
    times += 1  # 计数
print("游戏结束")

```

试玩两次，第一次运行程序，游戏过程如下：

```text
--------欢迎参加猜数字游戏，请开始--------
@数字区间0-100，请输入你猜的数字：30
你输入的数字是： 30
你猜的数字小于正确答案
@数字区间0-100，请输入你猜的数字：56
你输入的数字是： 56
你猜的数字小于正确答案
@数字区间0-100，请输入你猜的数字：89
你输入的数字是： 89
你猜的数字大于正确答案
@数字区间0-100，请输入你猜的数字：78
你输入的数字是： 78
你猜的数字大于正确答案
@数字区间0-100，请输入你猜的数字：67
你输入的数字是： 67
你猜的数字小于正确答案
@数字区间0-100，请输入你猜的数字：72
你输入的数字是： 72
你猜了6次，猜对了，真厉害
游戏结束
```

第二次运行程序，游戏过程如下：

```text
--------欢迎参加猜数字游戏，请开始--------
@数字区间0-100，请输入你猜的数字：60
你输入的数字是： 60
你猜的数字大于正确答案
@数字区间0-100，请输入你猜的数字：30
你输入的数字是： 30
你猜的数字小于正确答案
@数字区间0-100，请输入你猜的数字：45
你输入的数字是： 45
你猜的数字小于正确答案
@数字区间0-100，请输入你猜的数字：55
你输入的数字是： 55
你猜的数字大于正确答案
@数字区间0-100，请输入你猜的数字：48
你输入的数字是： 48
你猜的数字小于正确答案
@数字区间0-100，请输入你猜的数字：52
你输入的数字是： 52
你猜的数字大于正确答案
@数字区间0-100，请输入你猜的数字：50
你输入的数字是： 50
你猜的数字大于正确答案
@数字区间0-100，请输入你猜的数字：49
你输入的数字是： 49
你猜了8次，猜对了，真厉害
游戏结束
```

### 3.5 猜数字游戏续

猜数字游戏续。用`for`循环改写猜数字游戏程序，要求用变量`maxtimes`设置允许猜数字的最大次数（比如最多只允许猜6次`maxtimes = 6`），并在猜错后提示还有几次机会。（提示，猜对后可使用`break`跳出循环）

实验代码如下：

```python
import random

guess = 0
times = 1
secret = random.randint(0, 100)
maxtimes = 6

print("--------欢迎参加猜数字游戏，请开始--------")
print("----------你一共有{}次机会----------".format(maxtimes))

for times in range(maxtimes):
    guess = int(input("@数字区间0-100，请输入你猜的数字："))
    print("你输入的数字是：", guess)
    if guess == secret:
        print("你猜了{}次，猜对了，真厉害".format(times + 1))
        break
    else:
        if guess < secret:
            print("你猜的数字小于正确答案，还有{}次机会".format(maxtimes - times - 1))
        else:
            print("你猜的数字大于正确答案，还有{}次机会".format(maxtimes - times - 1))
    if times == maxtimes - 1:
        print(maxtimes, "次机会已经用光了哦")
print("游戏结束")
```

进行两轮试玩，其中猜对案例输出：

```text
--------欢迎参加猜数字游戏，请开始--------
----------你一共有6次机会----------
@数字区间0-100，请输入你猜的数字：30
你输入的数字是： 30
你猜的数字小于正确答案，还有5次机会
@数字区间0-100，请输入你猜的数字：50
你输入的数字是： 50
你猜的数字小于正确答案，还有4次机会
@数字区间0-100，请输入你猜的数字：70
你输入的数字是： 70
你猜的数字小于正确答案，还有3次机会
@数字区间0-100，请输入你猜的数字：90
你输入的数字是： 90
你猜的数字大于正确答案，还有2次机会
@数字区间0-100，请输入你猜的数字：80
你输入的数字是： 80
你猜的数字小于正确答案，还有1次机会
@数字区间0-100，请输入你猜的数字：85
你输入的数字是： 85
你猜了6次，猜对了，真厉害
游戏结束
```

猜错案例输出：

```text
--------欢迎参加猜数字游戏，请开始--------
----------你一共有6次机会----------
@数字区间0-100，请输入你猜的数字：10
你输入的数字是： 10
你猜的数字小于正确答案，还有5次机会
@数字区间0-100，请输入你猜的数字：20
你输入的数字是： 20
你猜的数字小于正确答案，还有4次机会
@数字区间0-100，请输入你猜的数字：30
你输入的数字是： 30
你猜的数字小于正确答案，还有3次机会
@数字区间0-100，请输入你猜的数字：40
你输入的数字是： 40
你猜的数字大于正确答案，还有2次机会
@数字区间0-100，请输入你猜的数字：39
你输入的数字是： 39
你猜的数字大于正确答案，还有1次机会
@数字区间0-100，请输入你猜的数字：38
你输入的数字是： 38
你猜的数字大于正确答案，还有0次机会
6 次机会已经用光了哦
游戏结束
```
