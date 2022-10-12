def spin_words(sentence):
    # Your code goes here
    sentence_list = sentence.split()
    for i in range(len(sentence_list)):
        if len(sentence_list[i]) >= 5:
            sentence_list[i] = sentence_list[i][::-1]
    return " ".join(sentence_list)

print(spin_words("This is another test"))