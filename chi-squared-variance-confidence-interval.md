# Why the Chi-Squared Distribution Appears in a Confidence Interval for Sample Variance

The chi-squared distribution shows up because the sample variance is built from a sum of squared normal quantities.

If
\[
X_1,\dots,X_n
\]
is a random sample from a normal population \(N(\mu,\sigma^2)\), then the key fact is
\[
\frac{(n-1)S^2}{\sigma^2}\sim \chi^2_{n-1},
\]
where
\[
S^2=\frac{1}{n-1}\sum_{i=1}^n (X_i-\overline X)^2.
\]

That statement is the whole reason the confidence interval works.

## Why this happens

Start with the standardized observations
\[
Z_i=\frac{X_i-\mu}{\sigma}.
\]
If the population is normal, then each \(Z_i\) is standard normal. A sum of squares of independent standard normals has a chi-squared distribution.

If \(\mu\) were known, then
\[
\sum_{i=1}^n \left(\frac{X_i-\mu}{\sigma}\right)^2 \sim \chi^2_n.
\]

But in practice \(\mu\) is usually unknown, so we replace it by \(\overline X\). That costs one degree of freedom, giving
\[
\sum_{i=1}^n \left(\frac{X_i-\overline X}{\sigma}\right)^2 \sim \chi^2_{n-1}.
\]

Now use
\[
\sum_{i=1}^n (X_i-\overline X)^2=(n-1)S^2.
\]
Substituting that in gives
\[
\frac{(n-1)S^2}{\sigma^2}\sim \chi^2_{n-1}.
\]

This is called a pivot: it involves the sample statistic \(S^2\), the unknown parameter \(\sigma^2\), and a known sampling distribution.

## How the confidence interval comes from it

Pick confidence level \(1-\alpha\). Then
\[
P\!\left(\chi^2_{\alpha/2,n-1}\le \frac{(n-1)S^2}{\sigma^2}\le \chi^2_{1-\alpha/2,n-1}\right)=1-\alpha,
\]
with the convention that \(\chi^2_{\alpha/2,n-1}\) is the left critical value and \(\chi^2_{1-\alpha/2,n-1}\) the right critical value.

Now solve for \(\sigma^2\):
\[
P\!\left(
\frac{(n-1)S^2}{\chi^2_{1-\alpha/2,n-1}}
\le
\sigma^2
\le
\frac{(n-1)S^2}{\chi^2_{\alpha/2,n-1}}
\right)=1-\alpha.
\]

So the confidence interval for the population variance is
\[
\left(
\frac{(n-1)S^2}{\chi^2_{1-\alpha/2,n-1}},
\frac{(n-1)S^2}{\chi^2_{\alpha/2,n-1}}
\right).
\]

For the population standard deviation, just take square roots.

## Assumptions

These need to be stated carefully:

- The data are a random sample from the population.
- The observations are independent.
- The population distribution is normal.

That last one is the crucial assumption. For mean intervals, mild nonnormality is often okay when \(n\) is large. For variance intervals, that is not true in the same way. The chi-squared interval for \(\sigma^2\) is exact only when the population itself is normal.

If sampling is without replacement from a finite population, independence is usually supported by the 10% condition: the sample size should be at most about 10% of the population.

## Interpretation

A \(100(1-\alpha)\%\) confidence interval means that if we repeatedly took samples the same way and built intervals by this method, about \(100(1-\alpha)\%\) of them would contain the true population variance \(\sigma^2\).

If you want, I can also turn this into a PreTeXt subsection for the book.
