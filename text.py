"""
    
"""


class Player:
    def __init__(self, hp, atk):
        self.hp = hp
        self.atk = atk

    def atk_enemy(self, enemy):
        pass


class Enemy:
    def __init__(self, hp, atk):
        self.hp = hp
        self.atk = atk

    def atk_player(self, player):
        pass