# import tensorflow as tf
#
# x = tf.linspace(-6., 6., 10)
#
# # æð¦ â ðçè¾å¥âåç¼©âå°ð¦ â (0,1)åºé´
# y = tf.nn.sigmoid(x)  # éè¿ Sigmoid å½æ°
#
# print("{x} \n {y}".format(x=x, y=y))
#
# # ReLU å¯¹å°äº 0 çå¼å¨é¨æå¶ä¸º 0ï¼å¯¹äºæ­£æ°åç´æ¥è¾åºï¼è¿ç§åè¾¹æå¶ç¹æ§æ¥æºäºçç©å­¦
# tf.nn.relu(x)  # éè¿ ReLU æ¿æ´»å½æ°
#
# # å½ð = 0æ¶ï¼LeayReLU å½æ°éåä¸º ReLU å½æ°ï¼å½ð â  0æ¶ï¼ð¦ < 0å¤è½å¤è·å¾è¾å°çå¯¼æ°å¼ð
# tf.nn.leaky_relu(x, alpha=0.1)  # éè¿ LeakyReLU æ¿æ´»å½æ°
#
# # è½å¤å°ð¦ â ðçè¾å¥âåç¼©âå°(â1,1)åºé´
# tf.nn.tanh(x)


import itertools
import re
import  math

lis = [0, 1, 2, 4, 8]
# lis = [0, 1, 2, 4, 8, 16, 32]

newLis = []

# for index in range(len(lis) - 1):
#     # print(index)
#     array = list(itertools.combinations(list(lis), 2 + index))
#     print("æåç»åç»æ===>  ç»åæ»æ°ï¼{count} è¯¦ç»ç»æï¼{array}\n".format(count=len(array), array=array))
#
#     for i in array:
#         total = sum(i)
#         newLis.append(total)
#         print("{i} ä¸¤ä¸¤ç¸å ç»æ: {total}".format(i=i, total=total))
#
# print("newLis: {newLis}".format(newLis={}.fromkeys(newLis).keys()))


array = list(itertools.combinations(list(lis), 2))
print("æåç»åç»æ===>  ç»åæ»æ°ï¼{count} è¯¦ç»ç»æï¼{array}\n".format(count=len(array), array=array))

for i in array:
    total = sum(i)
    print("{i} ä¸¤ä¸¤ç¸å ç»æ: {total}".format(i=i, total=total))

searchObj = re.match(r'BASE_(.*)_CPU', "SCAN_CPU", re.M | re.I)
if searchObj:
    print("searchObj.group() : ", searchObj.group())
else:
    print("Nothing found!!")


# å¤æ­æ¯å¦ä¸ºç´ æ°
def is_prime(number):
    if number == 1:
        return False
    sqrt = int(math.sqrt(number))
    for j in range(2, sqrt + 1):  # ä»2å°numberçç®æ¯å¹³æ¹æ ¹è¿­ä»£
        if number % j == 0:  # å¤æ­jæ¯å¦ä¸ºnumberçå æ°
            return False
    return True


# çæè·å½åå¼ææ¥è¿çç´ æ°
def generate_prime(number):
    for j in range(1, 3):  # ä»2å°numberçç®æ¯å¹³æ¹æ ¹è¿­ä»£
        number = number + j
        if is_prime(number):  # å¤æ­jæ¯å¦ä¸ºnumberçå æ°
            return number

print(generate_prime(1))
