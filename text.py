"""
    
"""
frozonset_manager = frozenset(["cc", "lb", "sq"])
frozonset_tech = frozenset(["cc", "lb", "gy", "zf"])
print("1. %s" % (frozonset_manager & frozonset_tech))
print("2. %s" % (frozonset_manager - frozonset_tech))
print("3. %s" % (frozonset_tech - frozonset_manager))
print("4 %s" % ("zf" in frozonset_manager))
print("5 %s" % (frozonset_manager ^ frozonset_tech))
print("6 %s" % (len(frozonset_manager | frozonset_tech)))
