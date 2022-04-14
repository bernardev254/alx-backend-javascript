#!/usr/bin/env python3
"""module containning type annotated function"""


def sum_list(input_list: list[float]) -> float:
    """type annotated function returning list's sum"""
    sum: float = 0.0
    for elem in input_list:
        sum += elem
    return sum
