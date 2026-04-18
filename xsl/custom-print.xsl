<?xml version="1.0"?>

<!DOCTYPE xsl:stylesheet [
    <!ENTITY % entities SYSTEM "/home/pong/.ptx/2.38.2/core/xsl/entities.ent">
    %entities;
]>

<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0"
    xmlns:xml="http://www.w3.org/XML/1998/namespace">

<xsl:import href="/home/pong/.ptx/2.38.2/core/xsl/pretext-latex.xsl" />

<!-- Force the appendix F tables into sideways floats for print output. -->
<xsl:template match="table[ancestor::appendix[@xml:id='app-f-table']]">
    <xsl:apply-templates select="." mode="newpage"/>
    <xsl:text>\begin{sidewaystable}%&#xa;</xsl:text>
    <xsl:text>\begin{</xsl:text>
    <xsl:apply-templates select="." mode="environment-name"/>
    <xsl:text>}{</xsl:text>
    <xsl:apply-templates select="." mode="type-name"/>
    <xsl:text>}{</xsl:text>
    <xsl:text>\textbf{</xsl:text>
    <xsl:apply-templates select="." mode="title-full"/>
    <xsl:text>}</xsl:text>
    <xsl:text>}{</xsl:text>
    <xsl:apply-templates select="." mode="unique-id"/>
    <xsl:text>}{</xsl:text>
    <xsl:if test="$b-latex-hardcode-numbers">
        <xsl:apply-templates select="." mode="number"/>
    </xsl:if>
    <xsl:text>}%&#xa;</xsl:text>
    <xsl:apply-templates select="." mode="debug-numbering-check"/>
    <xsl:apply-templates select="*"/>
    <xsl:variable name="fig-placement">
        <xsl:apply-templates select="." mode="figure-placement"/>
    </xsl:variable>
    <xsl:if test="($fig-placement = 'subnumber') or ($fig-placement = 'panel')">
        <xsl:text>\tcblower&#xa;</xsl:text>
    </xsl:if>
    <xsl:text>\end{</xsl:text>
    <xsl:apply-templates select="." mode="environment-name"/>
    <xsl:text>}%&#xa;</xsl:text>
    <xsl:text>\end{sidewaystable}%&#xa;</xsl:text>
    <xsl:apply-templates select="." mode="pop-footnote-text"/>
</xsl:template>

</xsl:stylesheet>
