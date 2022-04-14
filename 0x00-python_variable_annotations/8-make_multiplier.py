#!/usr/bin/env python3
""" module containing type annotated function"""
from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """function returning a function"""
    def my_make(arg: float):
        """callable function"""
        return arg * multiplier
    return my_make
