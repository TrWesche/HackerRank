from functools import cmp_to_key
class Player:
    def __init__(self, name, score):
        self.name = name
        self.score = score

    # def __repr__(self):
        
    # def comparator(a, b):
    #     if (a.score > b.score):
    #         return 1
    #     elif (a.score == b.score):
    #         if (len(a.name) >= len(b.name)):
    #             for idx in range(a.name):
    #                 if (a.name[idx] < b.name[idx]):
    #                     return -1
    #                 elif (a.name[idx] > b.name[idx]):
    #                     return 1
    #             return 0
    #         elif (len(a.name) < len(b.name)):
    #             for idx in range(b.name):
    #                 if (a.name[idx] < b.name[idx]):
    #                     return -1
    #                 elif (a.name[idx] > b.name[idx]):
    #                     return 1
    #             return 0
    #     else:
    #         return -1

    def comparator(a, b):
        # First compare scores
        if (a.score < b.score):
            return 1
        elif (a.score == b.score):
            if (a.name < b.name):
                return -1
            elif (a.name > b.name):
                return 1
            else:
                return 0
        else:
            return -1

    