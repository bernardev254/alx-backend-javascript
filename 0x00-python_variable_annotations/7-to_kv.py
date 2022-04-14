#!/usr/bin/env python3
"""module containing a type annotated function"""
from typing import Union


def to_kv(k: str, v: Union[int, float]) -> turple[str. float]:
    """type annotated function returning a turple"""
    return k, (v * v)
