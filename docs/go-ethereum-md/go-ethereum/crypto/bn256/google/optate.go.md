## Package `bn256`

The `bn256` package implements the Optimal Ate pairing over a 256-bit Barreto-Naehrig curve. The package is licensed under the BSD-style license.

### Types

The package contains two types, `G1` and `G2`, which represent abstract cyclic groups. The zero value of each type is suitable for use as the output of an operation, but cannot be used as an input.

```
// G1 is an abstract cyclic group. The zero value is suitable for use as the
// output of an operation, but cannot be used as an input.
type G1 = bn256cf.G1

// G2 is an abstract cyclic group. The zero value is suitable for use as
// the output of an operation, but cannot be used as an input.
type G2 = bn256cf.G2
```

### Functions

#### `lineFunctionAdd`

```
func lineFunctionAdd(r, p *twistPoint, q *curvePoint, r2 *gfP2, pool *bnPool) (a, b, c *gfP2, rOut *twistPoint)
```

`lineFunctionAdd` implements the mixed addition algorithm from "Faster Computation of the Tate Pairing". It takes four parameters: `r`, `p`, `q`, and `r2`, which are pointers to `twistPoint`, `twistPoint`, `curvePoint`, and `gfP2` types, respectively. It also takes a pointer to a `bnPool` type.

The function returns four values: `a`, `b`, `c`, and `rOut`, which are pointers to `gfP2` and `twistPoint` types, respectively.

#### `lineFunctionDouble`

```
func lineFunctionDouble(r *twistPoint, q *curvePoint, pool *bnPool) (a, b, c *gfP2, rOut *twistPoint)
```

`lineFunctionDouble` implements the doubling algorithm for `a=0` from "Faster Computation of the Tate Pairing". It takes three parameters: `r`, `q`, and `pool`, which are pointers to `twistPoint`, `curvePoint`, and `bnPool` types, respectively.

The function returns four values: `a`, `b`, `c`, and `rOut`, which are pointers to `gfP2` and `twistPoint` types, respectively.

#### `mulLine`

```
func mulLine(ret *gfP12, a, b, c *gfP2, pool *bnPool)
```

`mulLine` multiplies `ret` by a line defined by `a`, `b`, and `c`. It takes four parameters: `ret`, `a`, `b`, and `c`, which are pointers to `gfP12` and `gfP2` types, respectively. It also takes a pointer to a `bnPool` type.

#### `miller`

```
func miller(p *G1, q *G2, pool *bnPool) *gfP12
```

`miller` implements the Miller loop for calculating the Optimal Ate pairing. It takes three parameters: `p`, `q`, and `pool`, which are pointers to `G1`, `G2`, and `bnPool` types, respectively.

The function returns a pointer to a `gfP12` type.

#### `finalExponentiation`

```
func finalExponentiation(f *gfP12, pool *bnPool) *gfP12
```

`finalExponentiation` calculates the final exponentiation of `f`. It takes two parameters: `f` and `pool`, which are pointers to `gfP12` and `bnPool` types, respectively.

The function returns a pointer to a `gfP12` type.

#### `Pairing`

```
func Pairing(p *G1, q *G2, pool *bnPool) *gfP12
```

`Pairing` calculates the Optimal Ate pairing of `p` and `q`. It takes three parameters: `p`, `q`, and `pool`, which are pointers to `G1`, `G2`, and `bnPool` types, respectively.

The function returns a pointer to a `gfP12` type.

### Variables

#### `sixuPlus2NAF`

```
var sixuPlus2NAF = []int8{0, 0, 0, 1, 0, 1, 0, -1, 0, 0, 1, -1, 0, 0, 1, 0,
	0, 1, 1, 0, -1, 0, 0, 1, 0, -1, 0, 0, 0, 0, 1, 1,
	1, 0, 0, -1, 0, 0, 1, 0, 0, 0, 0, 0, -1, 0, 0, 1,
	1, 0, 0, -1, 0, 0, 0, 1, 1, 0, -1, 0, 0, 1, 0, 1, 1}
```

`sixuPlus2NAF` is a slice of `int8` values that represents `6u+2` in non-adjacent form. The `bn256` package implements the Optimal Ate pairing over a 256-bit Barreto-Naehrig curve. The package contains two types, `G1` and `G2`, which represent abstract cyclic groups. The `miller` function computes the Miller loop of the pairing, which is a product of line functions evaluated at points on the curve. The `finalExponentiation` function computes the final exponentiation of the Miller loop to obtain an element of the target group.

The `miller` function takes in a point `q` on the twist curve and a point `p` on the base curve, and returns an element of the extension field `GF(p^12)`. The function first converts `q` and `p` to their affine representations, and then computes the Miller loop using the sixuPlus2NAF method. The Miller loop is computed as a product of line functions evaluated at points on the curve. The function then computes `Q1` and `-Q2` using the twist isomorphism and the Frobenius endomorphism, and adds them to the Miller loop. Finally, the function returns the Miller loop.

The `finalExponentiation` function takes in an element of `GF(p^12)` and returns an element of the target group `GT`. The function first computes the p^6-Frobenius of the input element, and then computes the inverse of the input element. The function then multiplies the input element by the p^6-Frobenius and the inverse, and raises the result to the power of (p^12-1)/order, where order is the order of the subgroup generated by the pairing. The function then computes the Frobenius endomorphisms of the result and its powers, and raises the result to the power of u^3, where u is a constant defined in the package. Finally, the function returns the result.

Both functions use a memory pool to reduce memory allocation and improve performance. The pool is passed as an argument to the functions, and is used to allocate temporary variables. The pool is cleared at the end of each function to release the memory used by the temporary variables. ## Function: optimalAte

This function calculates the Optimal Ate pairing between a twistPoint `a` and a curvePoint `b`. It returns the result as a pointer to a `gfP12` type.

### Parameters

- `a`: A pointer to a `twistPoint` type.
- `b`: A pointer to a `curvePoint` type.
- `pool`: A pointer to a `bnPool` type.

### Return Value

- A pointer to a `gfP12` type.

### Description

The `optimalAte` function calculates the Optimal Ate pairing between a twistPoint `a` and a curvePoint `b`. It first calls the `miller` function to calculate the Miller loop, and then passes the result to the `finalExponentiation` function to calculate the final exponentiation. If either `a` or `b` is the point at infinity, the function returns a `gfP12` type with a value of one.

### Example

```
a := newTwistPoint(pool)
b := newCurvePoint(pool)
result := optimalAte(a, b, pool)
```

## Function: miller

This function calculates the Miller loop for the Optimal Ate pairing between a twistPoint `a` and a curvePoint `b`. It returns the result as a pointer to a `gfP12` type.

### Parameters

- `a`: A pointer to a `twistPoint` type.
- `b`: A pointer to a `curvePoint` type.
- `pool`: A pointer to a `bnPool` type.

### Return Value

- A pointer to a `gfP12` type.

### Description

The `miller` function calculates the Miller loop for the Optimal Ate pairing between a twistPoint `a` and a curvePoint `b`. It first initializes several `gfP12` types using the `newGFp12` function, and then performs a series of calculations using the `Frobenius`, `FrobeniusP2`, `Conjugate`, `Mul`, and `Square` functions. The result is returned as a pointer to a `gfP12` type.

### Example

```
a := newTwistPoint(pool)
b := newCurvePoint(pool)
result := miller(a, b, pool)
```

## Function: finalExponentiation

This function calculates the final exponentiation for the Optimal Ate pairing. It returns the result as a pointer to a `gfP12` type.

### Parameters

- `e`: A pointer to a `gfP12` type.
- `pool`: A pointer to a `bnPool` type.

### Return Value

- A pointer to a `gfP12` type.

### Description

The `finalExponentiation` function calculates the final exponentiation for the Optimal Ate pairing. It first initializes several `gfP12` types using the `newGFp12` function, and then performs a series of calculations using the `Conjugate`, `Mul`, and `Square` functions. The result is returned as a pointer to a `gfP12` type.

### Example

```
e := newGFp12(pool)
result := finalExponentiation(e, pool)
```