"""http://bit.ly/openwest-py-17
 
python3 -m idlelib.idle
 
REPL - Read, evaluate, print, loop
PEP 8 - Conventions for Python coding
 
This module helps create Markov Chains
 
>>> m = Markov('ab')
>>> m.predict('a')
'b'
>>> m.predict('c')
 
>>> get_table('ab')
{'a': {'b': 1}}
 
"""
import random

# This is a comment
 
class Markov:
    def __init__(self, data):
        self.table = None
         
    def predict(self, data_in):
        options = self.table[data_in]
        possible = ''
        for key, count in options.items():
            possible += key * count
        return random.choice(possible)
         
def get_table(line):
    result = {}
    for index, char in enumerate(line):
        try:
            next_char = line[index+1]
        except IndexError:
            break
        char_dict = result.get(char, {})
        char_dict.setdefault(next_char, 0)
        char_dict[next_char] += 1
        result[char] = char_dict
    return result
 
name = 'kacie'
print(name)
 
import doctest
doctest.testmod()



