---
title: 猴博士C语言第三课笔记
author: lkyu
tags:
  - 笔记
  - C语言
categories:
  - 笔记
date: 2022-09-11 00:00:00
updated: 2022-09-11 00:00:00
description:
---

选择语句

<!-- more -->

## 选择语句

### if 语句

```c
if(表达式)
{
    //代码块;
}
else
{
    //代码块;
}
```

> 输入一个整数,如果该数大于 60,则输出"猴博士帅”;
> 如果该数不大于 60,则输出"猴博士贼帅”。

```c
#include<stdio.h>
int main()
{
    int a;
    scanf("%d",&a);
    if(a>60)
        printf("猴博士帅\n);
    else
        printf("猴博士贼帅\n);
    return 0;
}
```

注:if/else 中也可以嵌套其他 if/else 语句

#### 例 1

> 输入两个实数 a、b,按数值由小到大的顺序输出这两个数

```c
#include <stdio.h>
int main()
{
    double a, b, t;
    scanf("%lf,%lf", &a, &b);
    if (a > b)
    {
        t = a;
        a = b;
        b = t;
    }
    printf("%f,%f\n", a, b);
    return 0;
}
```

#### 例 2

> 输入两个实数 a、b、c,按数值由小到大的顺序输出这三个数

```c
#include<stdio.h>
int main()
{
    double a,b,c,t;
    scanf("%lf,%lf,%lf",&a,&b,&c);
    if(a>b)
    {
        t=a;
        a=b;
        b=t;
    }
    if(a>c)
    {
        t=a;
        a=c;
        c=t;
    }
    if(b>c)
    {
        t=b;
        b=c;
        c=t;
    }
    printf("%f,%f,%f\n",a,b,c);
    return 0;
}
```

### 常见表达式形式

| 符号 |     含义     |
| :--: | :----------: |
| `>`  |     大于     |
| `>=` |   大于等于   |
| `<`  |     小于     |
| `<=` |   小于等于   |
| `==` |     等于     |
| `!=` |    不等于    |
| `&&` |  两边均满足  |
| `‖`  | 两边满足一个 |

#### 例 1

> 如果你觉得我写的不错的同时还想替我生个猴子,或者啊,你把我这个笔记分享给小伙伴了,那你都是大好人。

```c
if((你觉得我写的不错&&你想替我生个猴子)||你把这个笔记分享给了小伙伴)
```

#### 例 2

> 请编一程序,判断某一年是否是闰年。(注:当年份不是 100 的倍数且是 4 的倍数时,该年是闰年;当年份是 100 的倍数且是 400 的倍数时,该年也是闰年)

```c
#include<stdio.h>
int main()
{
    int a;
    printf("请输入年份\n");
    scanf("%d",&a);
    if((a%100!=0&&a%4==0)||a%400==0)
        printf("%d年是闰年\n",a);
    else
        printf("%d年不是闰年\n",a);
    return 0;
}
```

#### 例 3

> 输入一个字符,判断它是否为大写字母,若是则将其转换成小写字母,若不是则不转换,然后输出最后得到的字符

```c
#include<stdio.h>
int main()
{
    char ch;
    scanf("%c",&ch);
    if(ch>='A'&&ch<='Z')
        ch=ch+32;
    printf("%c\n",ch);
    return 0;
}
```

### 表达式 1?表达式 2:表达式 3

#### 理解

判断表达式 1 是否成立:

- 成立,执行表达式 2
- 不成立,执行表达式 3

#### 对比上例

> 输入一个字符,判断它是否为大写字母,若是则将其转换成小写字母,若不是则不转换,然后输出最后得到的字符

```c
#include <stdio.h>
int main()
{
    char ch;
    scanf("%c", &ch);
    ch = (ch >= 'A' && ch <= 'Z') ? (ch + 32) : ch;
    printf("%c\n", ch);
    return 0;
}
```

### switch 语句

#### 用法

```c
switch(整型变量或字符型变量)
{
  case 常量1:语句1;break;
  case 常量2:语句2;break;
  //若干可能情况
  case 常量n:语句n;break;
  default:语句n+1;break;
}
```

#### 例

> 某课成绩原为 A、B、C、D 四个等级,现要将其转成百分制分数段,规则是:A 等转成 85~100,B 等转成 0~84,C 等转成 60~69,D 等转成<60。请编一程序,成绩等级由键盘输入,输出分数段。

```c
#include<stdio.h>
int main()
{
  char dengji;
  scanf("%c",&dengji);
  switch(dengji)
    case 'A':printf("该生分数为85~100\n");break;
    case 'B':printf("该生分数为70～84\n");break;
    case 'C':printf("该生分数为60~69\n");break;
    case 'D':printf("该生分数为<60\n");break;
    default:printf("该生的等级输得不对！\n");break;
  return 0;
}
```
