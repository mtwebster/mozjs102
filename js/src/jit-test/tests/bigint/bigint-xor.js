const tests = [
  [-0x10000000000000001n, -2n, 0x10000000000000001n],
  [-0x10000000000000000n, -2n, 0xfffffffffffffffen],
  [-0xffffffffffffffffn, -2n, 0xffffffffffffffffn],
  [-0xfffffffffffffffen, -2n, 0xfffffffffffffffcn],
  [-0x8000000000000001n, -2n, 0x8000000000000001n],
  [-0x8000000000000000n, -2n, 0x7ffffffffffffffen],
  [-0x7fffffffffffffffn, -2n, 0x7fffffffffffffffn],
  [-0x7ffffffffffffffen, -2n, 0x7ffffffffffffffcn],
  [-0x100000001n, -2n, 0x100000001n],
  [-0x100000000n, -2n, 0xfffffffen],
  [-0xffffffffn, -2n, 0xffffffffn],
  [-0xfffffffen, -2n, 0xfffffffcn],
  [-0x80000001n, -2n, 0x80000001n],
  [-0x80000000n, -2n, 0x7ffffffen],
  [-0x7fffffffn, -2n, 0x7fffffffn],
  [-0x7ffffffen, -2n, 0x7ffffffcn],
  [-2n, -2n, 0n],
  [-1n, -2n, 1n],
  [0n, -2n, -2n],
  [1n, -2n, -1n],
  [2n, -2n, -4n],
  [0x7ffffffen, -2n, -0x80000000n],
  [0x7fffffffn, -2n, -0x7fffffffn],
  [0x80000000n, -2n, -0x80000002n],
  [0x80000001n, -2n, -0x80000001n],
  [0xfffffffen, -2n, -0x100000000n],
  [0xffffffffn, -2n, -0xffffffffn],
  [0x100000000n, -2n, -0x100000002n],
  [0x100000001n, -2n, -0x100000001n],
  [0x7ffffffffffffffen, -2n, -0x8000000000000000n],
  [0x7fffffffffffffffn, -2n, -0x7fffffffffffffffn],
  [0x8000000000000000n, -2n, -0x8000000000000002n],
  [0x8000000000000001n, -2n, -0x8000000000000001n],
  [0xfffffffffffffffen, -2n, -0x10000000000000000n],
  [0xffffffffffffffffn, -2n, -0xffffffffffffffffn],
  [0x10000000000000000n, -2n, -0x10000000000000002n],
  [0x10000000000000001n, -2n, -0x10000000000000001n],
  [-0x10000000000000001n, -1n, 0x10000000000000000n],
  [-0x10000000000000000n, -1n, 0xffffffffffffffffn],
  [-0xffffffffffffffffn, -1n, 0xfffffffffffffffen],
  [-0xfffffffffffffffen, -1n, 0xfffffffffffffffdn],
  [-0x8000000000000001n, -1n, 0x8000000000000000n],
  [-0x8000000000000000n, -1n, 0x7fffffffffffffffn],
  [-0x7fffffffffffffffn, -1n, 0x7ffffffffffffffen],
  [-0x7ffffffffffffffen, -1n, 0x7ffffffffffffffdn],
  [-0x100000001n, -1n, 0x100000000n],
  [-0x100000000n, -1n, 0xffffffffn],
  [-0xffffffffn, -1n, 0xfffffffen],
  [-0xfffffffen, -1n, 0xfffffffdn],
  [-0x80000001n, -1n, 0x80000000n],
  [-0x80000000n, -1n, 0x7fffffffn],
  [-0x7fffffffn, -1n, 0x7ffffffen],
  [-0x7ffffffen, -1n, 0x7ffffffdn],
  [-1n, -1n, 0n],
  [0n, -1n, -1n],
  [1n, -1n, -2n],
  [2n, -1n, -3n],
  [0x7ffffffen, -1n, -0x7fffffffn],
  [0x7fffffffn, -1n, -0x80000000n],
  [0x80000000n, -1n, -0x80000001n],
  [0x80000001n, -1n, -0x80000002n],
  [0xfffffffen, -1n, -0xffffffffn],
  [0xffffffffn, -1n, -0x100000000n],
  [0x100000000n, -1n, -0x100000001n],
  [0x100000001n, -1n, -0x100000002n],
  [0x7ffffffffffffffen, -1n, -0x7fffffffffffffffn],
  [0x7fffffffffffffffn, -1n, -0x8000000000000000n],
  [0x8000000000000000n, -1n, -0x8000000000000001n],
  [0x8000000000000001n, -1n, -0x8000000000000002n],
  [0xfffffffffffffffen, -1n, -0xffffffffffffffffn],
  [0xffffffffffffffffn, -1n, -0x10000000000000000n],
  [0x10000000000000000n, -1n, -0x10000000000000001n],
  [0x10000000000000001n, -1n, -0x10000000000000002n],
  [-0x10000000000000001n, 0n, -0x10000000000000001n],
  [-0x10000000000000000n, 0n, -0x10000000000000000n],
  [-0xffffffffffffffffn, 0n, -0xffffffffffffffffn],
  [-0xfffffffffffffffen, 0n, -0xfffffffffffffffen],
  [-0x8000000000000001n, 0n, -0x8000000000000001n],
  [-0x8000000000000000n, 0n, -0x8000000000000000n],
  [-0x7fffffffffffffffn, 0n, -0x7fffffffffffffffn],
  [-0x7ffffffffffffffen, 0n, -0x7ffffffffffffffen],
  [-0x100000001n, 0n, -0x100000001n],
  [-0x100000000n, 0n, -0x100000000n],
  [-0xffffffffn, 0n, -0xffffffffn],
  [-0xfffffffen, 0n, -0xfffffffen],
  [-0x80000001n, 0n, -0x80000001n],
  [-0x80000000n, 0n, -0x80000000n],
  [-0x7fffffffn, 0n, -0x7fffffffn],
  [-0x7ffffffen, 0n, -0x7ffffffen],
  [0n, 0n, 0n],
  [1n, 0n, 1n],
  [2n, 0n, 2n],
  [0x7ffffffen, 0n, 0x7ffffffen],
  [0x7fffffffn, 0n, 0x7fffffffn],
  [0x80000000n, 0n, 0x80000000n],
  [0x80000001n, 0n, 0x80000001n],
  [0xfffffffen, 0n, 0xfffffffen],
  [0xffffffffn, 0n, 0xffffffffn],
  [0x100000000n, 0n, 0x100000000n],
  [0x100000001n, 0n, 0x100000001n],
  [0x7ffffffffffffffen, 0n, 0x7ffffffffffffffen],
  [0x7fffffffffffffffn, 0n, 0x7fffffffffffffffn],
  [0x8000000000000000n, 0n, 0x8000000000000000n],
  [0x8000000000000001n, 0n, 0x8000000000000001n],
  [0xfffffffffffffffen, 0n, 0xfffffffffffffffen],
  [0xffffffffffffffffn, 0n, 0xffffffffffffffffn],
  [0x10000000000000000n, 0n, 0x10000000000000000n],
  [0x10000000000000001n, 0n, 0x10000000000000001n],
  [-0x10000000000000001n, 1n, -0x10000000000000002n],
  [-0x10000000000000000n, 1n, -0xffffffffffffffffn],
  [-0xffffffffffffffffn, 1n, -0x10000000000000000n],
  [-0xfffffffffffffffen, 1n, -0xfffffffffffffffdn],
  [-0x8000000000000001n, 1n, -0x8000000000000002n],
  [-0x8000000000000000n, 1n, -0x7fffffffffffffffn],
  [-0x7fffffffffffffffn, 1n, -0x8000000000000000n],
  [-0x7ffffffffffffffen, 1n, -0x7ffffffffffffffdn],
  [-0x100000001n, 1n, -0x100000002n],
  [-0x100000000n, 1n, -0xffffffffn],
  [-0xffffffffn, 1n, -0x100000000n],
  [-0xfffffffen, 1n, -0xfffffffdn],
  [-0x80000001n, 1n, -0x80000002n],
  [-0x80000000n, 1n, -0x7fffffffn],
  [-0x7fffffffn, 1n, -0x80000000n],
  [-0x7ffffffen, 1n, -0x7ffffffdn],
  [1n, 1n, 0n],
  [2n, 1n, 3n],
  [0x7ffffffen, 1n, 0x7fffffffn],
  [0x7fffffffn, 1n, 0x7ffffffen],
  [0x80000000n, 1n, 0x80000001n],
  [0x80000001n, 1n, 0x80000000n],
  [0xfffffffen, 1n, 0xffffffffn],
  [0xffffffffn, 1n, 0xfffffffen],
  [0x100000000n, 1n, 0x100000001n],
  [0x100000001n, 1n, 0x100000000n],
  [0x7ffffffffffffffen, 1n, 0x7fffffffffffffffn],
  [0x7fffffffffffffffn, 1n, 0x7ffffffffffffffen],
  [0x8000000000000000n, 1n, 0x8000000000000001n],
  [0x8000000000000001n, 1n, 0x8000000000000000n],
  [0xfffffffffffffffen, 1n, 0xffffffffffffffffn],
  [0xffffffffffffffffn, 1n, 0xfffffffffffffffen],
  [0x10000000000000000n, 1n, 0x10000000000000001n],
  [0x10000000000000001n, 1n, 0x10000000000000000n],
  [-0x10000000000000001n, 2n, -0x10000000000000003n],
  [-0x10000000000000000n, 2n, -0xfffffffffffffffen],
  [-0xffffffffffffffffn, 2n, -0xfffffffffffffffdn],
  [-0xfffffffffffffffen, 2n, -0x10000000000000000n],
  [-0x8000000000000001n, 2n, -0x8000000000000003n],
  [-0x8000000000000000n, 2n, -0x7ffffffffffffffen],
  [-0x7fffffffffffffffn, 2n, -0x7ffffffffffffffdn],
  [-0x7ffffffffffffffen, 2n, -0x8000000000000000n],
  [-0x100000001n, 2n, -0x100000003n],
  [-0x100000000n, 2n, -0xfffffffen],
  [-0xffffffffn, 2n, -0xfffffffdn],
  [-0xfffffffen, 2n, -0x100000000n],
  [-0x80000001n, 2n, -0x80000003n],
  [-0x80000000n, 2n, -0x7ffffffen],
  [-0x7fffffffn, 2n, -0x7ffffffdn],
  [-0x7ffffffen, 2n, -0x80000000n],
  [2n, 2n, 0n],
  [0x7ffffffen, 2n, 0x7ffffffcn],
  [0x7fffffffn, 2n, 0x7ffffffdn],
  [0x80000000n, 2n, 0x80000002n],
  [0x80000001n, 2n, 0x80000003n],
  [0xfffffffen, 2n, 0xfffffffcn],
  [0xffffffffn, 2n, 0xfffffffdn],
  [0x100000000n, 2n, 0x100000002n],
  [0x100000001n, 2n, 0x100000003n],
  [0x7ffffffffffffffen, 2n, 0x7ffffffffffffffcn],
  [0x7fffffffffffffffn, 2n, 0x7ffffffffffffffdn],
  [0x8000000000000000n, 2n, 0x8000000000000002n],
  [0x8000000000000001n, 2n, 0x8000000000000003n],
  [0xfffffffffffffffen, 2n, 0xfffffffffffffffcn],
  [0xffffffffffffffffn, 2n, 0xfffffffffffffffdn],
  [0x10000000000000000n, 2n, 0x10000000000000002n],
  [0x10000000000000001n, 2n, 0x10000000000000003n],
  [-0x10000000000000001n, 0x7ffffffen, -0x1000000007fffffffn],
  [-0x10000000000000000n, 0x7ffffffen, -0xffffffff80000002n],
  [-0xffffffffffffffffn, 0x7ffffffen, -0xffffffff80000001n],
  [-0xfffffffffffffffen, 0x7ffffffen, -0xffffffff80000004n],
  [-0x8000000000000001n, 0x7ffffffen, -0x800000007fffffffn],
  [-0x8000000000000000n, 0x7ffffffen, -0x7fffffff80000002n],
  [-0x7fffffffffffffffn, 0x7ffffffen, -0x7fffffff80000001n],
  [-0x7ffffffffffffffen, 0x7ffffffen, -0x7fffffff80000004n],
  [-0x100000001n, 0x7ffffffen, -0x17fffffffn],
  [-0x100000000n, 0x7ffffffen, -0x80000002n],
  [-0xffffffffn, 0x7ffffffen, -0x80000001n],
  [-0xfffffffen, 0x7ffffffen, -0x80000004n],
  [-0x80000001n, 0x7ffffffen, -0xffffffffn],
  [-0x80000000n, 0x7ffffffen, -2n],
  [-0x7fffffffn, 0x7ffffffen, -1n],
  [-0x7ffffffen, 0x7ffffffen, -4n],
  [0x7ffffffen, 0x7ffffffen, 0n],
  [0x7fffffffn, 0x7ffffffen, 1n],
  [0x80000000n, 0x7ffffffen, 0xfffffffen],
  [0x80000001n, 0x7ffffffen, 0xffffffffn],
  [0xfffffffen, 0x7ffffffen, 0x80000000n],
  [0xffffffffn, 0x7ffffffen, 0x80000001n],
  [0x100000000n, 0x7ffffffen, 0x17ffffffen],
  [0x100000001n, 0x7ffffffen, 0x17fffffffn],
  [0x7ffffffffffffffen, 0x7ffffffen, 0x7fffffff80000000n],
  [0x7fffffffffffffffn, 0x7ffffffen, 0x7fffffff80000001n],
  [0x8000000000000000n, 0x7ffffffen, 0x800000007ffffffen],
  [0x8000000000000001n, 0x7ffffffen, 0x800000007fffffffn],
  [0xfffffffffffffffen, 0x7ffffffen, 0xffffffff80000000n],
  [0xffffffffffffffffn, 0x7ffffffen, 0xffffffff80000001n],
  [0x10000000000000000n, 0x7ffffffen, 0x1000000007ffffffen],
  [0x10000000000000001n, 0x7ffffffen, 0x1000000007fffffffn],
  [-0x10000000000000001n, 0x7fffffffn, -0x10000000080000000n],
  [-0x10000000000000000n, 0x7fffffffn, -0xffffffff80000001n],
  [-0xffffffffffffffffn, 0x7fffffffn, -0xffffffff80000002n],
  [-0xfffffffffffffffen, 0x7fffffffn, -0xffffffff80000003n],
  [-0x8000000000000001n, 0x7fffffffn, -0x8000000080000000n],
  [-0x8000000000000000n, 0x7fffffffn, -0x7fffffff80000001n],
  [-0x7fffffffffffffffn, 0x7fffffffn, -0x7fffffff80000002n],
  [-0x7ffffffffffffffen, 0x7fffffffn, -0x7fffffff80000003n],
  [-0x100000001n, 0x7fffffffn, -0x180000000n],
  [-0x100000000n, 0x7fffffffn, -0x80000001n],
  [-0xffffffffn, 0x7fffffffn, -0x80000002n],
  [-0xfffffffen, 0x7fffffffn, -0x80000003n],
  [-0x80000001n, 0x7fffffffn, -0x100000000n],
  [-0x80000000n, 0x7fffffffn, -1n],
  [-0x7fffffffn, 0x7fffffffn, -2n],
  [-0x7ffffffen, 0x7fffffffn, -3n],
  [0x7fffffffn, 0x7fffffffn, 0n],
  [0x80000000n, 0x7fffffffn, 0xffffffffn],
  [0x80000001n, 0x7fffffffn, 0xfffffffen],
  [0xfffffffen, 0x7fffffffn, 0x80000001n],
  [0xffffffffn, 0x7fffffffn, 0x80000000n],
  [0x100000000n, 0x7fffffffn, 0x17fffffffn],
  [0x100000001n, 0x7fffffffn, 0x17ffffffen],
  [0x7ffffffffffffffen, 0x7fffffffn, 0x7fffffff80000001n],
  [0x7fffffffffffffffn, 0x7fffffffn, 0x7fffffff80000000n],
  [0x8000000000000000n, 0x7fffffffn, 0x800000007fffffffn],
  [0x8000000000000001n, 0x7fffffffn, 0x800000007ffffffen],
  [0xfffffffffffffffen, 0x7fffffffn, 0xffffffff80000001n],
  [0xffffffffffffffffn, 0x7fffffffn, 0xffffffff80000000n],
  [0x10000000000000000n, 0x7fffffffn, 0x1000000007fffffffn],
  [0x10000000000000001n, 0x7fffffffn, 0x1000000007ffffffen],
  [-0x10000000000000001n, 0x80000000n, -0x10000000080000001n],
  [-0x10000000000000000n, 0x80000000n, -0xffffffff80000000n],
  [-0xffffffffffffffffn, 0x80000000n, -0xffffffff7fffffffn],
  [-0xfffffffffffffffen, 0x80000000n, -0xffffffff7ffffffen],
  [-0x8000000000000001n, 0x80000000n, -0x8000000080000001n],
  [-0x8000000000000000n, 0x80000000n, -0x7fffffff80000000n],
  [-0x7fffffffffffffffn, 0x80000000n, -0x7fffffff7fffffffn],
  [-0x7ffffffffffffffen, 0x80000000n, -0x7fffffff7ffffffen],
  [-0x100000001n, 0x80000000n, -0x180000001n],
  [-0x100000000n, 0x80000000n, -0x80000000n],
  [-0xffffffffn, 0x80000000n, -0x7fffffffn],
  [-0xfffffffen, 0x80000000n, -0x7ffffffen],
  [-0x80000001n, 0x80000000n, -1n],
  [-0x80000000n, 0x80000000n, -0x100000000n],
  [-0x7fffffffn, 0x80000000n, -0xffffffffn],
  [-0x7ffffffen, 0x80000000n, -0xfffffffen],
  [0x80000000n, 0x80000000n, 0n],
  [0x80000001n, 0x80000000n, 1n],
  [0xfffffffen, 0x80000000n, 0x7ffffffen],
  [0xffffffffn, 0x80000000n, 0x7fffffffn],
  [0x100000000n, 0x80000000n, 0x180000000n],
  [0x100000001n, 0x80000000n, 0x180000001n],
  [0x7ffffffffffffffen, 0x80000000n, 0x7fffffff7ffffffen],
  [0x7fffffffffffffffn, 0x80000000n, 0x7fffffff7fffffffn],
  [0x8000000000000000n, 0x80000000n, 0x8000000080000000n],
  [0x8000000000000001n, 0x80000000n, 0x8000000080000001n],
  [0xfffffffffffffffen, 0x80000000n, 0xffffffff7ffffffen],
  [0xffffffffffffffffn, 0x80000000n, 0xffffffff7fffffffn],
  [0x10000000000000000n, 0x80000000n, 0x10000000080000000n],
  [0x10000000000000001n, 0x80000000n, 0x10000000080000001n],
  [-0x10000000000000001n, 0x80000001n, -0x10000000080000002n],
  [-0x10000000000000000n, 0x80000001n, -0xffffffff7fffffffn],
  [-0xffffffffffffffffn, 0x80000001n, -0xffffffff80000000n],
  [-0xfffffffffffffffen, 0x80000001n, -0xffffffff7ffffffdn],
  [-0x8000000000000001n, 0x80000001n, -0x8000000080000002n],
  [-0x8000000000000000n, 0x80000001n, -0x7fffffff7fffffffn],
  [-0x7fffffffffffffffn, 0x80000001n, -0x7fffffff80000000n],
  [-0x7ffffffffffffffen, 0x80000001n, -0x7fffffff7ffffffdn],
  [-0x100000001n, 0x80000001n, -0x180000002n],
  [-0x100000000n, 0x80000001n, -0x7fffffffn],
  [-0xffffffffn, 0x80000001n, -0x80000000n],
  [-0xfffffffen, 0x80000001n, -0x7ffffffdn],
  [-0x80000001n, 0x80000001n, -2n],
  [-0x80000000n, 0x80000001n, -0xffffffffn],
  [-0x7fffffffn, 0x80000001n, -0x100000000n],
  [-0x7ffffffen, 0x80000001n, -0xfffffffdn],
  [0x80000001n, 0x80000001n, 0n],
  [0xfffffffen, 0x80000001n, 0x7fffffffn],
  [0xffffffffn, 0x80000001n, 0x7ffffffen],
  [0x100000000n, 0x80000001n, 0x180000001n],
  [0x100000001n, 0x80000001n, 0x180000000n],
  [0x7ffffffffffffffen, 0x80000001n, 0x7fffffff7fffffffn],
  [0x7fffffffffffffffn, 0x80000001n, 0x7fffffff7ffffffen],
  [0x8000000000000000n, 0x80000001n, 0x8000000080000001n],
  [0x8000000000000001n, 0x80000001n, 0x8000000080000000n],
  [0xfffffffffffffffen, 0x80000001n, 0xffffffff7fffffffn],
  [0xffffffffffffffffn, 0x80000001n, 0xffffffff7ffffffen],
  [0x10000000000000000n, 0x80000001n, 0x10000000080000001n],
  [0x10000000000000001n, 0x80000001n, 0x10000000080000000n],
  [-0x10000000000000001n, -0x80000001n, 0x10000000080000000n],
  [-0x10000000000000000n, -0x80000001n, 0xffffffff7fffffffn],
  [-0xffffffffffffffffn, -0x80000001n, 0xffffffff7ffffffen],
  [-0xfffffffffffffffen, -0x80000001n, 0xffffffff7ffffffdn],
  [-0x8000000000000001n, -0x80000001n, 0x8000000080000000n],
  [-0x8000000000000000n, -0x80000001n, 0x7fffffff7fffffffn],
  [-0x7fffffffffffffffn, -0x80000001n, 0x7fffffff7ffffffen],
  [-0x7ffffffffffffffen, -0x80000001n, 0x7fffffff7ffffffdn],
  [-0x100000001n, -0x80000001n, 0x180000000n],
  [-0x100000000n, -0x80000001n, 0x7fffffffn],
  [-0xffffffffn, -0x80000001n, 0x7ffffffen],
  [-0xfffffffen, -0x80000001n, 0x7ffffffdn],
  [-0x80000001n, -0x80000001n, 0n],
  [-0x80000000n, -0x80000001n, 0xffffffffn],
  [-0x7fffffffn, -0x80000001n, 0xfffffffen],
  [-0x7ffffffen, -0x80000001n, 0xfffffffdn],
  [0xfffffffen, -0x80000001n, -0x7fffffffn],
  [0xffffffffn, -0x80000001n, -0x80000000n],
  [0x100000000n, -0x80000001n, -0x180000001n],
  [0x100000001n, -0x80000001n, -0x180000002n],
  [0x7ffffffffffffffen, -0x80000001n, -0x7fffffff7fffffffn],
  [0x7fffffffffffffffn, -0x80000001n, -0x7fffffff80000000n],
  [0x8000000000000000n, -0x80000001n, -0x8000000080000001n],
  [0x8000000000000001n, -0x80000001n, -0x8000000080000002n],
  [0xfffffffffffffffen, -0x80000001n, -0xffffffff7fffffffn],
  [0xffffffffffffffffn, -0x80000001n, -0xffffffff80000000n],
  [0x10000000000000000n, -0x80000001n, -0x10000000080000001n],
  [0x10000000000000001n, -0x80000001n, -0x10000000080000002n],
  [-0x10000000000000001n, -0x80000000n, 0x1000000007fffffffn],
  [-0x10000000000000000n, -0x80000000n, 0xffffffff80000000n],
  [-0xffffffffffffffffn, -0x80000000n, 0xffffffff80000001n],
  [-0xfffffffffffffffen, -0x80000000n, 0xffffffff80000002n],
  [-0x8000000000000001n, -0x80000000n, 0x800000007fffffffn],
  [-0x8000000000000000n, -0x80000000n, 0x7fffffff80000000n],
  [-0x7fffffffffffffffn, -0x80000000n, 0x7fffffff80000001n],
  [-0x7ffffffffffffffen, -0x80000000n, 0x7fffffff80000002n],
  [-0x100000001n, -0x80000000n, 0x17fffffffn],
  [-0x100000000n, -0x80000000n, 0x80000000n],
  [-0xffffffffn, -0x80000000n, 0x80000001n],
  [-0xfffffffen, -0x80000000n, 0x80000002n],
  [-0x80000000n, -0x80000000n, 0n],
  [-0x7fffffffn, -0x80000000n, 1n],
  [-0x7ffffffen, -0x80000000n, 2n],
  [0xfffffffen, -0x80000000n, -0x80000002n],
  [0xffffffffn, -0x80000000n, -0x80000001n],
  [0x100000000n, -0x80000000n, -0x180000000n],
  [0x100000001n, -0x80000000n, -0x17fffffffn],
  [0x7ffffffffffffffen, -0x80000000n, -0x7fffffff80000002n],
  [0x7fffffffffffffffn, -0x80000000n, -0x7fffffff80000001n],
  [0x8000000000000000n, -0x80000000n, -0x8000000080000000n],
  [0x8000000000000001n, -0x80000000n, -0x800000007fffffffn],
  [0xfffffffffffffffen, -0x80000000n, -0xffffffff80000002n],
  [0xffffffffffffffffn, -0x80000000n, -0xffffffff80000001n],
  [0x10000000000000000n, -0x80000000n, -0x10000000080000000n],
  [0x10000000000000001n, -0x80000000n, -0x1000000007fffffffn],
  [-0x10000000000000001n, -0x7fffffffn, 0x1000000007ffffffen],
  [-0x10000000000000000n, -0x7fffffffn, 0xffffffff80000001n],
  [-0xffffffffffffffffn, -0x7fffffffn, 0xffffffff80000000n],
  [-0xfffffffffffffffen, -0x7fffffffn, 0xffffffff80000003n],
  [-0x8000000000000001n, -0x7fffffffn, 0x800000007ffffffen],
  [-0x8000000000000000n, -0x7fffffffn, 0x7fffffff80000001n],
  [-0x7fffffffffffffffn, -0x7fffffffn, 0x7fffffff80000000n],
  [-0x7ffffffffffffffen, -0x7fffffffn, 0x7fffffff80000003n],
  [-0x100000001n, -0x7fffffffn, 0x17ffffffen],
  [-0x100000000n, -0x7fffffffn, 0x80000001n],
  [-0xffffffffn, -0x7fffffffn, 0x80000000n],
  [-0xfffffffen, -0x7fffffffn, 0x80000003n],
  [-0x7fffffffn, -0x7fffffffn, 0n],
  [-0x7ffffffen, -0x7fffffffn, 3n],
  [0xfffffffen, -0x7fffffffn, -0x80000001n],
  [0xffffffffn, -0x7fffffffn, -0x80000002n],
  [0x100000000n, -0x7fffffffn, -0x17fffffffn],
  [0x100000001n, -0x7fffffffn, -0x180000000n],
  [0x7ffffffffffffffen, -0x7fffffffn, -0x7fffffff80000001n],
  [0x7fffffffffffffffn, -0x7fffffffn, -0x7fffffff80000002n],
  [0x8000000000000000n, -0x7fffffffn, -0x800000007fffffffn],
  [0x8000000000000001n, -0x7fffffffn, -0x8000000080000000n],
  [0xfffffffffffffffen, -0x7fffffffn, -0xffffffff80000001n],
  [0xffffffffffffffffn, -0x7fffffffn, -0xffffffff80000002n],
  [0x10000000000000000n, -0x7fffffffn, -0x1000000007fffffffn],
  [0x10000000000000001n, -0x7fffffffn, -0x10000000080000000n],
  [-0x10000000000000001n, -0x7ffffffen, 0x1000000007ffffffdn],
  [-0x10000000000000000n, -0x7ffffffen, 0xffffffff80000002n],
  [-0xffffffffffffffffn, -0x7ffffffen, 0xffffffff80000003n],
  [-0xfffffffffffffffen, -0x7ffffffen, 0xffffffff80000000n],
  [-0x8000000000000001n, -0x7ffffffen, 0x800000007ffffffdn],
  [-0x8000000000000000n, -0x7ffffffen, 0x7fffffff80000002n],
  [-0x7fffffffffffffffn, -0x7ffffffen, 0x7fffffff80000003n],
  [-0x7ffffffffffffffen, -0x7ffffffen, 0x7fffffff80000000n],
  [-0x100000001n, -0x7ffffffen, 0x17ffffffdn],
  [-0x100000000n, -0x7ffffffen, 0x80000002n],
  [-0xffffffffn, -0x7ffffffen, 0x80000003n],
  [-0xfffffffen, -0x7ffffffen, 0x80000000n],
  [-0x7ffffffen, -0x7ffffffen, 0n],
  [0xfffffffen, -0x7ffffffen, -0x80000004n],
  [0xffffffffn, -0x7ffffffen, -0x80000003n],
  [0x100000000n, -0x7ffffffen, -0x17ffffffen],
  [0x100000001n, -0x7ffffffen, -0x17ffffffdn],
  [0x7ffffffffffffffen, -0x7ffffffen, -0x7fffffff80000004n],
  [0x7fffffffffffffffn, -0x7ffffffen, -0x7fffffff80000003n],
  [0x8000000000000000n, -0x7ffffffen, -0x800000007ffffffen],
  [0x8000000000000001n, -0x7ffffffen, -0x800000007ffffffdn],
  [0xfffffffffffffffen, -0x7ffffffen, -0xffffffff80000004n],
  [0xffffffffffffffffn, -0x7ffffffen, -0xffffffff80000003n],
  [0x10000000000000000n, -0x7ffffffen, -0x1000000007ffffffen],
  [0x10000000000000001n, -0x7ffffffen, -0x1000000007ffffffdn],
  [-0x10000000000000001n, 0xfffffffen, -0x100000000ffffffffn],
  [-0x10000000000000000n, 0xfffffffen, -0xffffffff00000002n],
  [-0xffffffffffffffffn, 0xfffffffen, -0xffffffff00000001n],
  [-0xfffffffffffffffen, 0xfffffffen, -0xffffffff00000004n],
  [-0x8000000000000001n, 0xfffffffen, -0x80000000ffffffffn],
  [-0x8000000000000000n, 0xfffffffen, -0x7fffffff00000002n],
  [-0x7fffffffffffffffn, 0xfffffffen, -0x7fffffff00000001n],
  [-0x7ffffffffffffffen, 0xfffffffen, -0x7fffffff00000004n],
  [-0x100000001n, 0xfffffffen, -0x1ffffffffn],
  [-0x100000000n, 0xfffffffen, -2n],
  [-0xffffffffn, 0xfffffffen, -1n],
  [-0xfffffffen, 0xfffffffen, -4n],
  [0xfffffffen, 0xfffffffen, 0n],
  [0xffffffffn, 0xfffffffen, 1n],
  [0x100000000n, 0xfffffffen, 0x1fffffffen],
  [0x100000001n, 0xfffffffen, 0x1ffffffffn],
  [0x7ffffffffffffffen, 0xfffffffen, 0x7fffffff00000000n],
  [0x7fffffffffffffffn, 0xfffffffen, 0x7fffffff00000001n],
  [0x8000000000000000n, 0xfffffffen, 0x80000000fffffffen],
  [0x8000000000000001n, 0xfffffffen, 0x80000000ffffffffn],
  [0xfffffffffffffffen, 0xfffffffen, 0xffffffff00000000n],
  [0xffffffffffffffffn, 0xfffffffen, 0xffffffff00000001n],
  [0x10000000000000000n, 0xfffffffen, 0x100000000fffffffen],
  [0x10000000000000001n, 0xfffffffen, 0x100000000ffffffffn],
  [-0x10000000000000001n, 0xffffffffn, -0x10000000100000000n],
  [-0x10000000000000000n, 0xffffffffn, -0xffffffff00000001n],
  [-0xffffffffffffffffn, 0xffffffffn, -0xffffffff00000002n],
  [-0xfffffffffffffffen, 0xffffffffn, -0xffffffff00000003n],
  [-0x8000000000000001n, 0xffffffffn, -0x8000000100000000n],
  [-0x8000000000000000n, 0xffffffffn, -0x7fffffff00000001n],
  [-0x7fffffffffffffffn, 0xffffffffn, -0x7fffffff00000002n],
  [-0x7ffffffffffffffen, 0xffffffffn, -0x7fffffff00000003n],
  [-0x100000001n, 0xffffffffn, -0x200000000n],
  [-0x100000000n, 0xffffffffn, -1n],
  [-0xffffffffn, 0xffffffffn, -2n],
  [-0xfffffffen, 0xffffffffn, -3n],
  [0xffffffffn, 0xffffffffn, 0n],
  [0x100000000n, 0xffffffffn, 0x1ffffffffn],
  [0x100000001n, 0xffffffffn, 0x1fffffffen],
  [0x7ffffffffffffffen, 0xffffffffn, 0x7fffffff00000001n],
  [0x7fffffffffffffffn, 0xffffffffn, 0x7fffffff00000000n],
  [0x8000000000000000n, 0xffffffffn, 0x80000000ffffffffn],
  [0x8000000000000001n, 0xffffffffn, 0x80000000fffffffen],
  [0xfffffffffffffffen, 0xffffffffn, 0xffffffff00000001n],
  [0xffffffffffffffffn, 0xffffffffn, 0xffffffff00000000n],
  [0x10000000000000000n, 0xffffffffn, 0x100000000ffffffffn],
  [0x10000000000000001n, 0xffffffffn, 0x100000000fffffffen],
  [-0x10000000000000001n, 0x100000000n, -0x10000000100000001n],
  [-0x10000000000000000n, 0x100000000n, -0xffffffff00000000n],
  [-0xffffffffffffffffn, 0x100000000n, -0xfffffffeffffffffn],
  [-0xfffffffffffffffen, 0x100000000n, -0xfffffffefffffffen],
  [-0x8000000000000001n, 0x100000000n, -0x8000000100000001n],
  [-0x8000000000000000n, 0x100000000n, -0x7fffffff00000000n],
  [-0x7fffffffffffffffn, 0x100000000n, -0x7ffffffeffffffffn],
  [-0x7ffffffffffffffen, 0x100000000n, -0x7ffffffefffffffen],
  [-0x100000001n, 0x100000000n, -1n],
  [-0x100000000n, 0x100000000n, -0x200000000n],
  [-0xffffffffn, 0x100000000n, -0x1ffffffffn],
  [-0xfffffffen, 0x100000000n, -0x1fffffffen],
  [0x100000000n, 0x100000000n, 0n],
  [0x100000001n, 0x100000000n, 1n],
  [0x7ffffffffffffffen, 0x100000000n, 0x7ffffffefffffffen],
  [0x7fffffffffffffffn, 0x100000000n, 0x7ffffffeffffffffn],
  [0x8000000000000000n, 0x100000000n, 0x8000000100000000n],
  [0x8000000000000001n, 0x100000000n, 0x8000000100000001n],
  [0xfffffffffffffffen, 0x100000000n, 0xfffffffefffffffen],
  [0xffffffffffffffffn, 0x100000000n, 0xfffffffeffffffffn],
  [0x10000000000000000n, 0x100000000n, 0x10000000100000000n],
  [0x10000000000000001n, 0x100000000n, 0x10000000100000001n],
  [-0x10000000000000001n, 0x100000001n, -0x10000000100000002n],
  [-0x10000000000000000n, 0x100000001n, -0xfffffffeffffffffn],
  [-0xffffffffffffffffn, 0x100000001n, -0xffffffff00000000n],
  [-0xfffffffffffffffen, 0x100000001n, -0xfffffffefffffffdn],
  [-0x8000000000000001n, 0x100000001n, -0x8000000100000002n],
  [-0x8000000000000000n, 0x100000001n, -0x7ffffffeffffffffn],
  [-0x7fffffffffffffffn, 0x100000001n, -0x7fffffff00000000n],
  [-0x7ffffffffffffffen, 0x100000001n, -0x7ffffffefffffffdn],
  [-0x100000001n, 0x100000001n, -2n],
  [-0x100000000n, 0x100000001n, -0x1ffffffffn],
  [-0xffffffffn, 0x100000001n, -0x200000000n],
  [-0xfffffffen, 0x100000001n, -0x1fffffffdn],
  [0x100000001n, 0x100000001n, 0n],
  [0x7ffffffffffffffen, 0x100000001n, 0x7ffffffeffffffffn],
  [0x7fffffffffffffffn, 0x100000001n, 0x7ffffffefffffffen],
  [0x8000000000000000n, 0x100000001n, 0x8000000100000001n],
  [0x8000000000000001n, 0x100000001n, 0x8000000100000000n],
  [0xfffffffffffffffen, 0x100000001n, 0xfffffffeffffffffn],
  [0xffffffffffffffffn, 0x100000001n, 0xfffffffefffffffen],
  [0x10000000000000000n, 0x100000001n, 0x10000000100000001n],
  [0x10000000000000001n, 0x100000001n, 0x10000000100000000n],
  [-0x10000000000000001n, -0x100000001n, 0x10000000100000000n],
  [-0x10000000000000000n, -0x100000001n, 0xfffffffeffffffffn],
  [-0xffffffffffffffffn, -0x100000001n, 0xfffffffefffffffen],
  [-0xfffffffffffffffen, -0x100000001n, 0xfffffffefffffffdn],
  [-0x8000000000000001n, -0x100000001n, 0x8000000100000000n],
  [-0x8000000000000000n, -0x100000001n, 0x7ffffffeffffffffn],
  [-0x7fffffffffffffffn, -0x100000001n, 0x7ffffffefffffffen],
  [-0x7ffffffffffffffen, -0x100000001n, 0x7ffffffefffffffdn],
  [-0x100000001n, -0x100000001n, 0n],
  [-0x100000000n, -0x100000001n, 0x1ffffffffn],
  [-0xffffffffn, -0x100000001n, 0x1fffffffen],
  [-0xfffffffen, -0x100000001n, 0x1fffffffdn],
  [0x7ffffffffffffffen, -0x100000001n, -0x7ffffffeffffffffn],
  [0x7fffffffffffffffn, -0x100000001n, -0x7fffffff00000000n],
  [0x8000000000000000n, -0x100000001n, -0x8000000100000001n],
  [0x8000000000000001n, -0x100000001n, -0x8000000100000002n],
  [0xfffffffffffffffen, -0x100000001n, -0xfffffffeffffffffn],
  [0xffffffffffffffffn, -0x100000001n, -0xffffffff00000000n],
  [0x10000000000000000n, -0x100000001n, -0x10000000100000001n],
  [0x10000000000000001n, -0x100000001n, -0x10000000100000002n],
  [-0x10000000000000001n, -0x100000000n, 0x100000000ffffffffn],
  [-0x10000000000000000n, -0x100000000n, 0xffffffff00000000n],
  [-0xffffffffffffffffn, -0x100000000n, 0xffffffff00000001n],
  [-0xfffffffffffffffen, -0x100000000n, 0xffffffff00000002n],
  [-0x8000000000000001n, -0x100000000n, 0x80000000ffffffffn],
  [-0x8000000000000000n, -0x100000000n, 0x7fffffff00000000n],
  [-0x7fffffffffffffffn, -0x100000000n, 0x7fffffff00000001n],
  [-0x7ffffffffffffffen, -0x100000000n, 0x7fffffff00000002n],
  [-0x100000000n, -0x100000000n, 0n],
  [-0xffffffffn, -0x100000000n, 1n],
  [-0xfffffffen, -0x100000000n, 2n],
  [0x7ffffffffffffffen, -0x100000000n, -0x7fffffff00000002n],
  [0x7fffffffffffffffn, -0x100000000n, -0x7fffffff00000001n],
  [0x8000000000000000n, -0x100000000n, -0x8000000100000000n],
  [0x8000000000000001n, -0x100000000n, -0x80000000ffffffffn],
  [0xfffffffffffffffen, -0x100000000n, -0xffffffff00000002n],
  [0xffffffffffffffffn, -0x100000000n, -0xffffffff00000001n],
  [0x10000000000000000n, -0x100000000n, -0x10000000100000000n],
  [0x10000000000000001n, -0x100000000n, -0x100000000ffffffffn],
  [-0x10000000000000001n, -0xffffffffn, 0x100000000fffffffen],
  [-0x10000000000000000n, -0xffffffffn, 0xffffffff00000001n],
  [-0xffffffffffffffffn, -0xffffffffn, 0xffffffff00000000n],
  [-0xfffffffffffffffen, -0xffffffffn, 0xffffffff00000003n],
  [-0x8000000000000001n, -0xffffffffn, 0x80000000fffffffen],
  [-0x8000000000000000n, -0xffffffffn, 0x7fffffff00000001n],
  [-0x7fffffffffffffffn, -0xffffffffn, 0x7fffffff00000000n],
  [-0x7ffffffffffffffen, -0xffffffffn, 0x7fffffff00000003n],
  [-0xffffffffn, -0xffffffffn, 0n],
  [-0xfffffffen, -0xffffffffn, 3n],
  [0x7ffffffffffffffen, -0xffffffffn, -0x7fffffff00000001n],
  [0x7fffffffffffffffn, -0xffffffffn, -0x7fffffff00000002n],
  [0x8000000000000000n, -0xffffffffn, -0x80000000ffffffffn],
  [0x8000000000000001n, -0xffffffffn, -0x8000000100000000n],
  [0xfffffffffffffffen, -0xffffffffn, -0xffffffff00000001n],
  [0xffffffffffffffffn, -0xffffffffn, -0xffffffff00000002n],
  [0x10000000000000000n, -0xffffffffn, -0x100000000ffffffffn],
  [0x10000000000000001n, -0xffffffffn, -0x10000000100000000n],
  [-0x10000000000000001n, -0xfffffffen, 0x100000000fffffffdn],
  [-0x10000000000000000n, -0xfffffffen, 0xffffffff00000002n],
  [-0xffffffffffffffffn, -0xfffffffen, 0xffffffff00000003n],
  [-0xfffffffffffffffen, -0xfffffffen, 0xffffffff00000000n],
  [-0x8000000000000001n, -0xfffffffen, 0x80000000fffffffdn],
  [-0x8000000000000000n, -0xfffffffen, 0x7fffffff00000002n],
  [-0x7fffffffffffffffn, -0xfffffffen, 0x7fffffff00000003n],
  [-0x7ffffffffffffffen, -0xfffffffen, 0x7fffffff00000000n],
  [-0xfffffffen, -0xfffffffen, 0n],
  [0x7ffffffffffffffen, -0xfffffffen, -0x7fffffff00000004n],
  [0x7fffffffffffffffn, -0xfffffffen, -0x7fffffff00000003n],
  [0x8000000000000000n, -0xfffffffen, -0x80000000fffffffen],
  [0x8000000000000001n, -0xfffffffen, -0x80000000fffffffdn],
  [0xfffffffffffffffen, -0xfffffffen, -0xffffffff00000004n],
  [0xffffffffffffffffn, -0xfffffffen, -0xffffffff00000003n],
  [0x10000000000000000n, -0xfffffffen, -0x100000000fffffffen],
  [0x10000000000000001n, -0xfffffffen, -0x100000000fffffffdn],
  [-0x10000000000000001n, 0x7ffffffffffffffen, -0x17fffffffffffffffn],
  [-0x10000000000000000n, 0x7ffffffffffffffen, -0x8000000000000002n],
  [-0xffffffffffffffffn, 0x7ffffffffffffffen, -0x8000000000000001n],
  [-0xfffffffffffffffen, 0x7ffffffffffffffen, -0x8000000000000004n],
  [-0x8000000000000001n, 0x7ffffffffffffffen, -0xffffffffffffffffn],
  [-0x8000000000000000n, 0x7ffffffffffffffen, -2n],
  [-0x7fffffffffffffffn, 0x7ffffffffffffffen, -1n],
  [-0x7ffffffffffffffen, 0x7ffffffffffffffen, -4n],
  [0x7ffffffffffffffen, 0x7ffffffffffffffen, 0n],
  [0x7fffffffffffffffn, 0x7ffffffffffffffen, 1n],
  [0x8000000000000000n, 0x7ffffffffffffffen, 0xfffffffffffffffen],
  [0x8000000000000001n, 0x7ffffffffffffffen, 0xffffffffffffffffn],
  [0xfffffffffffffffen, 0x7ffffffffffffffen, 0x8000000000000000n],
  [0xffffffffffffffffn, 0x7ffffffffffffffen, 0x8000000000000001n],
  [0x10000000000000000n, 0x7ffffffffffffffen, 0x17ffffffffffffffen],
  [0x10000000000000001n, 0x7ffffffffffffffen, 0x17fffffffffffffffn],
  [-0x10000000000000001n, 0x7fffffffffffffffn, -0x18000000000000000n],
  [-0x10000000000000000n, 0x7fffffffffffffffn, -0x8000000000000001n],
  [-0xffffffffffffffffn, 0x7fffffffffffffffn, -0x8000000000000002n],
  [-0xfffffffffffffffen, 0x7fffffffffffffffn, -0x8000000000000003n],
  [-0x8000000000000001n, 0x7fffffffffffffffn, -0x10000000000000000n],
  [-0x8000000000000000n, 0x7fffffffffffffffn, -1n],
  [-0x7fffffffffffffffn, 0x7fffffffffffffffn, -2n],
  [-0x7ffffffffffffffen, 0x7fffffffffffffffn, -3n],
  [0x7fffffffffffffffn, 0x7fffffffffffffffn, 0n],
  [0x8000000000000000n, 0x7fffffffffffffffn, 0xffffffffffffffffn],
  [0x8000000000000001n, 0x7fffffffffffffffn, 0xfffffffffffffffen],
  [0xfffffffffffffffen, 0x7fffffffffffffffn, 0x8000000000000001n],
  [0xffffffffffffffffn, 0x7fffffffffffffffn, 0x8000000000000000n],
  [0x10000000000000000n, 0x7fffffffffffffffn, 0x17fffffffffffffffn],
  [0x10000000000000001n, 0x7fffffffffffffffn, 0x17ffffffffffffffen],
  [-0x10000000000000001n, 0x8000000000000000n, -0x18000000000000001n],
  [-0x10000000000000000n, 0x8000000000000000n, -0x8000000000000000n],
  [-0xffffffffffffffffn, 0x8000000000000000n, -0x7fffffffffffffffn],
  [-0xfffffffffffffffen, 0x8000000000000000n, -0x7ffffffffffffffen],
  [-0x8000000000000001n, 0x8000000000000000n, -1n],
  [-0x8000000000000000n, 0x8000000000000000n, -0x10000000000000000n],
  [-0x7fffffffffffffffn, 0x8000000000000000n, -0xffffffffffffffffn],
  [-0x7ffffffffffffffen, 0x8000000000000000n, -0xfffffffffffffffen],
  [0x8000000000000000n, 0x8000000000000000n, 0n],
  [0x8000000000000001n, 0x8000000000000000n, 1n],
  [0xfffffffffffffffen, 0x8000000000000000n, 0x7ffffffffffffffen],
  [0xffffffffffffffffn, 0x8000000000000000n, 0x7fffffffffffffffn],
  [0x10000000000000000n, 0x8000000000000000n, 0x18000000000000000n],
  [0x10000000000000001n, 0x8000000000000000n, 0x18000000000000001n],
  [-0x10000000000000001n, 0x8000000000000001n, -0x18000000000000002n],
  [-0x10000000000000000n, 0x8000000000000001n, -0x7fffffffffffffffn],
  [-0xffffffffffffffffn, 0x8000000000000001n, -0x8000000000000000n],
  [-0xfffffffffffffffen, 0x8000000000000001n, -0x7ffffffffffffffdn],
  [-0x8000000000000001n, 0x8000000000000001n, -2n],
  [-0x8000000000000000n, 0x8000000000000001n, -0xffffffffffffffffn],
  [-0x7fffffffffffffffn, 0x8000000000000001n, -0x10000000000000000n],
  [-0x7ffffffffffffffen, 0x8000000000000001n, -0xfffffffffffffffdn],
  [0x8000000000000001n, 0x8000000000000001n, 0n],
  [0xfffffffffffffffen, 0x8000000000000001n, 0x7fffffffffffffffn],
  [0xffffffffffffffffn, 0x8000000000000001n, 0x7ffffffffffffffen],
  [0x10000000000000000n, 0x8000000000000001n, 0x18000000000000001n],
  [0x10000000000000001n, 0x8000000000000001n, 0x18000000000000000n],
  [-0x10000000000000001n, -0x8000000000000001n, 0x18000000000000000n],
  [-0x10000000000000000n, -0x8000000000000001n, 0x7fffffffffffffffn],
  [-0xffffffffffffffffn, -0x8000000000000001n, 0x7ffffffffffffffen],
  [-0xfffffffffffffffen, -0x8000000000000001n, 0x7ffffffffffffffdn],
  [-0x8000000000000001n, -0x8000000000000001n, 0n],
  [-0x8000000000000000n, -0x8000000000000001n, 0xffffffffffffffffn],
  [-0x7fffffffffffffffn, -0x8000000000000001n, 0xfffffffffffffffen],
  [-0x7ffffffffffffffen, -0x8000000000000001n, 0xfffffffffffffffdn],
  [0xfffffffffffffffen, -0x8000000000000001n, -0x7fffffffffffffffn],
  [0xffffffffffffffffn, -0x8000000000000001n, -0x8000000000000000n],
  [0x10000000000000000n, -0x8000000000000001n, -0x18000000000000001n],
  [0x10000000000000001n, -0x8000000000000001n, -0x18000000000000002n],
  [-0x10000000000000001n, -0x8000000000000000n, 0x17fffffffffffffffn],
  [-0x10000000000000000n, -0x8000000000000000n, 0x8000000000000000n],
  [-0xffffffffffffffffn, -0x8000000000000000n, 0x8000000000000001n],
  [-0xfffffffffffffffen, -0x8000000000000000n, 0x8000000000000002n],
  [-0x8000000000000000n, -0x8000000000000000n, 0n],
  [-0x7fffffffffffffffn, -0x8000000000000000n, 1n],
  [-0x7ffffffffffffffen, -0x8000000000000000n, 2n],
  [0xfffffffffffffffen, -0x8000000000000000n, -0x8000000000000002n],
  [0xffffffffffffffffn, -0x8000000000000000n, -0x8000000000000001n],
  [0x10000000000000000n, -0x8000000000000000n, -0x18000000000000000n],
  [0x10000000000000001n, -0x8000000000000000n, -0x17fffffffffffffffn],
  [-0x10000000000000001n, -0x7fffffffffffffffn, 0x17ffffffffffffffen],
  [-0x10000000000000000n, -0x7fffffffffffffffn, 0x8000000000000001n],
  [-0xffffffffffffffffn, -0x7fffffffffffffffn, 0x8000000000000000n],
  [-0xfffffffffffffffen, -0x7fffffffffffffffn, 0x8000000000000003n],
  [-0x7fffffffffffffffn, -0x7fffffffffffffffn, 0n],
  [-0x7ffffffffffffffen, -0x7fffffffffffffffn, 3n],
  [0xfffffffffffffffen, -0x7fffffffffffffffn, -0x8000000000000001n],
  [0xffffffffffffffffn, -0x7fffffffffffffffn, -0x8000000000000002n],
  [0x10000000000000000n, -0x7fffffffffffffffn, -0x17fffffffffffffffn],
  [0x10000000000000001n, -0x7fffffffffffffffn, -0x18000000000000000n],
  [-0x10000000000000001n, -0x7ffffffffffffffen, 0x17ffffffffffffffdn],
  [-0x10000000000000000n, -0x7ffffffffffffffen, 0x8000000000000002n],
  [-0xffffffffffffffffn, -0x7ffffffffffffffen, 0x8000000000000003n],
  [-0xfffffffffffffffen, -0x7ffffffffffffffen, 0x8000000000000000n],
  [-0x7ffffffffffffffen, -0x7ffffffffffffffen, 0n],
  [0xfffffffffffffffen, -0x7ffffffffffffffen, -0x8000000000000004n],
  [0xffffffffffffffffn, -0x7ffffffffffffffen, -0x8000000000000003n],
  [0x10000000000000000n, -0x7ffffffffffffffen, -0x17ffffffffffffffen],
  [0x10000000000000001n, -0x7ffffffffffffffen, -0x17ffffffffffffffdn],
  [-0x10000000000000001n, 0xfffffffffffffffen, -0x1ffffffffffffffffn],
  [-0x10000000000000000n, 0xfffffffffffffffen, -2n],
  [-0xffffffffffffffffn, 0xfffffffffffffffen, -1n],
  [-0xfffffffffffffffen, 0xfffffffffffffffen, -4n],
  [0xfffffffffffffffen, 0xfffffffffffffffen, 0n],
  [0xffffffffffffffffn, 0xfffffffffffffffen, 1n],
  [0x10000000000000000n, 0xfffffffffffffffen, 0x1fffffffffffffffen],
  [0x10000000000000001n, 0xfffffffffffffffen, 0x1ffffffffffffffffn],
  [-0x10000000000000001n, 0xffffffffffffffffn, -0x20000000000000000n],
  [-0x10000000000000000n, 0xffffffffffffffffn, -1n],
  [-0xffffffffffffffffn, 0xffffffffffffffffn, -2n],
  [-0xfffffffffffffffen, 0xffffffffffffffffn, -3n],
  [0xffffffffffffffffn, 0xffffffffffffffffn, 0n],
  [0x10000000000000000n, 0xffffffffffffffffn, 0x1ffffffffffffffffn],
  [0x10000000000000001n, 0xffffffffffffffffn, 0x1fffffffffffffffen],
  [-0x10000000000000001n, 0x10000000000000000n, -1n],
  [-0x10000000000000000n, 0x10000000000000000n, -0x20000000000000000n],
  [-0xffffffffffffffffn, 0x10000000000000000n, -0x1ffffffffffffffffn],
  [-0xfffffffffffffffen, 0x10000000000000000n, -0x1fffffffffffffffen],
  [0x10000000000000000n, 0x10000000000000000n, 0n],
  [0x10000000000000001n, 0x10000000000000000n, 1n],
  [-0x10000000000000001n, 0x10000000000000001n, -2n],
  [-0x10000000000000000n, 0x10000000000000001n, -0x1ffffffffffffffffn],
  [-0xffffffffffffffffn, 0x10000000000000001n, -0x20000000000000000n],
  [-0xfffffffffffffffen, 0x10000000000000001n, -0x1fffffffffffffffdn],
  [0x10000000000000001n, 0x10000000000000001n, 0n],
  [-0x10000000000000001n, -0x10000000000000001n, 0n],
  [-0x10000000000000000n, -0x10000000000000001n, 0x1ffffffffffffffffn],
  [-0xffffffffffffffffn, -0x10000000000000001n, 0x1fffffffffffffffen],
  [-0xfffffffffffffffen, -0x10000000000000001n, 0x1fffffffffffffffdn],
  [-0x10000000000000000n, -0x10000000000000000n, 0n],
  [-0xffffffffffffffffn, -0x10000000000000000n, 1n],
  [-0xfffffffffffffffen, -0x10000000000000000n, 2n],
  [-0xffffffffffffffffn, -0xffffffffffffffffn, 0n],
  [-0xfffffffffffffffen, -0xffffffffffffffffn, 3n],
  [-0xfffffffffffffffen, -0xfffffffffffffffen, 0n],
];

function f(tests) {
  for (let test of tests) {
    let lhs = test[0], rhs = test[1], expected = test[2];

    assertEq(lhs ^ rhs, expected);
    assertEq(rhs ^ lhs, expected);
  }
}

for (let i = 0; i < 10; ++i) {
  f(tests);
}
