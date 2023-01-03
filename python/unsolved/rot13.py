# import string


# def checkLetter(letter):
#     if letter in string.ascii_lowercase:
#         letterIndex = string.ascii_lowercase.index(letter)
#         rotIndex = letterIndex + 13
#         if rotIndex > 25:
#             rotIndex -= 26
#         return string.ascii_lowercase[rotIndex]
#     elif letter in string.ascii_uppercase:
#         letterIndex = string.ascii_uppercase.index(letter)
#         rotIndex = letterIndex + 13
#         if rotIndex > 25:
#             rotIndex -= 26
#         return string.ascii_uppercase[rotIndex]
#     else:
#         return letter


# def rot13(message):
#     for letter in message:
#         if letter in string.ascii_lowercase:
#             message = message.replace(letter, checkLetter(letter))
#         elif letter in string.ascii_uppercase:
#             message = message.replace(letter, checkLetter(letter.lower()).upper())
#         else:
#             pass
#     return message

# print(rot13("How can you tell an extrovert from an\nintrovert at NSA? Va gur ryringbef,\ngur rkgebireg ybbxf ng gur BGURE thl'f fubrf."))

# # print(rot13("ar"))
# # print(checkLetter("a"))


rot13Dict = {
    "a": "n",
    "b": "o",
    "c": "p",
    "d": "q",
    "e": "r",
    "f": "s",
    "g": "t",
    "h": "u",
    "i": "v",
    "j": "w",
    "k": "x",
    "l": "y",
    "m": "z",
    "n": "a",
    "o": "b",
    "p": "c",
    "q": "d",
    "r": "e",
    "s": "f",
    "t": "g",
    "u": "h",
    "v": "i",
    "w": "j",
    "x": "k",
    "y": "l",
    "z": "m",
}


def rot13(message):
    for letter in message:
        if letter in rot13Dict:
            message = message.replace(letter, rot13Dict[letter])
        elif letter.lower() in rot13Dict:
            message = message.replace(
                letter, rot13Dict[letter.lower()].upper())
        else:
            message = message.replace(letter, letter)
        print(message)
    return message


print(rot13("How can you tell"))
# Reverse
print(rot13("Ubj pna lbh gryy"))
