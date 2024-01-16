---
title: 猴博士C语言第一课笔记
author: lkyu
tags:
    - 笔记
    - C语言
categories:
    - 笔记
date: 2022-08-30 00:00:00
updated: 2022-09-11 00:00:00
description:
---

C 语言基本语句 1

<!-- more -->

## 课时 1 C 语言基本语句 1

### 固定格式

```c
int main() //main入口函数
{
    //写代码的地方
    return 0;
}
```

### printf 语句

```c
#include<stdio.h>
int main() //main入口函数
{
    printf("我是\t"); //使用\t来空格
    printf("老六\n"); //使用\n来换行，考试最后的输出一定要加上
    return 0;
}
```

#### 例

> 请编写一个 C 程序，输出以下信息：`猴博士贼溜！`

```c
#include<stdio.h>
int main()
{
    printf(“猴博士贼溜！\n");
    return 0;
}
```

### int、float、double、char 型数据

```c
int a=3; //整型
float a=3.14; //允许位数少，但考试足够
double a=3.14; //允许位数多，占空间较大
char a="A"; //字符
//分号不可缺少
```

同时赋多个值

```c
//写法一
int a=3,b,c=5;
//写法二
int b;
int a=3;
int c=5;
//写法三
int a,b,c;
a=3;
b=5;
```

#### 例 1

```c
#include <stdio.h>
int main()
{
    int a = 5, b, c, d, e, f;
    b = a + 2;
    c = b - a;
    d = a * c;
    e = a / d;
    f = a % d;
    printf("a=%d\n", a);
    printf("b=%d\n", b);
    printf("c=%d\n", c);
    printf("d=%d\n", d);
    printf("e=%d\n", e);
    printf("f=%d\n", f);
    return 0;
    //不要忘了分号
}
```

> 运行结果：
>
> > a=5
> > b=7
> > c=2
> > d=10
> > e=0
> > f=5

#### 例二

```c
# include<stdio.h>
int main()
{
    double a,b,c,s;
    a=3.67;
    b=5.43;
    c=6.21;
    s=(a+b+c)/2;
    printf("s=%f",s);
    return 0;
}
```

> 运行结果
>
> > s=7.655000

#### 例三：字母与数字相加

-   大/小写字母+/-32 后，会转化为相应的小/大写字母
-   原理为字母、符号都有其 ASCII 码编号，程序按编号进行+/-后再转化为对应字符
-   大/小写字母+/-其他数字会转化成字母表中相应字符

注：[ASCII 字符表](https://www.zybuluo.com/pandaoxi2022/note/2322378)

```c
#include<stdio.h>
int main()
{
    char a='B',b='O',c='Y';
    a=a+32; //也写作'a+=32'
    b=b+32; //也写作'b+=32'
    c=c+32; //也写作'c+=32'
    printf("a=%c\n",a);
    printf("b=%c\n",b);
    printf("c=%c\n",c);
    return 0;
}
```

> 运行结果
>
> > a=b
> > b=o
> > c=y

### 用 printf 语句输出 int、float、double、char 型数据

详见上面各例子最后的 printf 语句。

注：数据类型与替代符对应表

|  数据类型  | 替代符 | 意义                                       |
| :--------: | :----: | :----------------------------------------- |
|    整型    |   %d   | 以十进制形式输出带符号整数(正数不输出符号) |
|    整型    |   %u   | 以十进制形式输出无符号整数                 |
| 实型(浮点) |   %f   | 以小数形式输出单、双精度实数               |
| 实型(浮点) |   %e   | 以指数形式输出单、双精度实数               |
| 实型(浮点) |   %g   | 以%f%e 中较短的输出宽度输出单、双精度实数  |
|    字符    |   %c   | 输出单个字符                               |
|    字符    |   %s   | 输出字符串                                 |
