#!/usr/bin/env python3
"""module containing type annotated function"""
from typing import Iterable, Sequence


def element_length(lst: Iterable
                   [Sequence]) -> list[turple[Iterable[int], int]]:
    """function returning elements of a list and their lens"""
    return [(i, len(i)) for i in lst]
