from __future__ import print_function
from sys import argv
import subprocess as sp

success = lambda: print("Success")
running = lambda n, submitted: print("Running exercise {}.\nReceived value {}".format(n, submitted))
failed = lambda exp: print("Failed: Expected {}".format(exp))
EXERCISES = 15 #Number of exercises

#List of exercises
exercises = map(int,argv[1:]) if len(argv) > 1 else range(1, EXERCISES+1)

def test(n, args):
    """
    n:- test number
    args:- arguments to be passed in
    """
    submitted = sp.Popen(["node", "./ex{}.js".format(i)] + args, stdout=sp.PIPE).communicate()[0]
    solution = sp.Popen(["node",  "./sol{}.js".format(i)] + args, stdout=sp.PIPE).communicate()[0]

    running(i, submitted)
    if submitted != solution:
        failed(solution)
    else:
        success()



for i in exercises:
    if i == 1:
        test(1, [])  
    elif i == 2:
        test(2, [])
    elif i == 7:
        test(7, [['a','b','c','a','d','a'], ['a','d','a']])
