"""Print each square on a new line.

A simple square will only be one line::

    >>> dump(0)
    0

    >>> dump(1)
    1

A split square will use four lines::

    >>> dump([0, 1, 0, 1])
    0
    1
    0
    1

A nested split square will use one line per square::

    >>> dump([0, 0, 0, [1, 1, 1, 1]])
    0
    0
    0
    1
    1
    1
    1

Of course, these can nested deeply and still work::

    >>> dump([0, 0, 0, [1, 1, 1, [0, 0, 0, [1, 1, 1, 1]]]])
    0
    0
    0
    1
    1
    1
    0
    0
    0
    1
    1
    1
    1
"""


from re import S


def dump(square):
    """Print each square on a new line."""
    if isinstance(square, int): 
        print(square)
        return
    for s in square:
        if isinstance(s, list):
            return dump(s)
        else: print(s)

if __name__ == "__main__":
    import doctest
    if doctest.testmod().failed == 0:
        print("\n*** ALL TESTS PASS; NICE JOB! ***\n")
