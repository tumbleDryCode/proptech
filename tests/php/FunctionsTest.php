<?php
declare(strict_types=1);

use PHPUnit\Framework\TestCase;

/**
 * Tests for include/functions.php
 *
 * Covers getPropTypeStr() – the multilingual property-type label lookup.
 */
class FunctionsTest extends TestCase
{
    protected function setUp(): void
    {
        // getPropTypeStr reads the 'usrlang' cookie to decide the locale.
        // We reset it before each test so tests are independent.
        $_COOKIE = [];
    }

    // ------------------------------------------------------------------ //
    // Helpers                                                              //
    // ------------------------------------------------------------------ //

    private function withLang(string $lang): void
    {
        $_COOKIE['usrlang'] = $lang;
    }

    // ------------------------------------------------------------------ //
    // Default language (pt_pt) – no cookie set                            //
    // ------------------------------------------------------------------ //

    public function testDefaultLangSell(): void
    {
        $this->assertSame('Para venda', getPropTypeStr('sell'));
    }

    public function testDefaultLangRent(): void
    {
        $this->assertSame('Para alugar', getPropTypeStr('rent'));
    }

    public function testDefaultLangLease(): void
    {
        $this->assertSame('Para arrendar', getPropTypeStr('lease'));
    }

    public function testDefaultLangAuction(): void
    {
        $this->assertSame('Leilão', getPropTypeStr('auction'));
    }

    public function testDefaultLangForeclosure(): void
    {
        $this->assertSame('Execução', getPropTypeStr('foreclosure'));
    }

    // ------------------------------------------------------------------ //
    // English (en_us)                                                      //
    // ------------------------------------------------------------------ //

    public function testEnUsSell(): void
    {
        $this->withLang('en_us');
        $this->assertSame('For Sale', getPropTypeStr('sell'));
    }

    public function testEnUsRent(): void
    {
        $this->withLang('en_us');
        $this->assertSame('For Rent', getPropTypeStr('rent'));
    }

    public function testEnUsLease(): void
    {
        $this->withLang('en_us');
        $this->assertSame('For Lease', getPropTypeStr('lease'));
    }

    public function testEnUsAuction(): void
    {
        $this->withLang('en_us');
        $this->assertSame('Auction', getPropTypeStr('auction'));
    }

    public function testEnUsForeclosure(): void
    {
        $this->withLang('en_us');
        $this->assertSame('Foreclosure', getPropTypeStr('foreclosure'));
    }

    // ------------------------------------------------------------------ //
    // Portuguese (pt_pt) – explicit cookie                                //
    // ------------------------------------------------------------------ //

    public function testPtPtSell(): void
    {
        $this->withLang('pt_pt');
        $this->assertSame('Para venda', getPropTypeStr('sell'));
    }

    public function testPtPtRent(): void
    {
        $this->withLang('pt_pt');
        $this->assertSame('Para alugar', getPropTypeStr('rent'));
    }

    public function testPtPtLease(): void
    {
        $this->withLang('pt_pt');
        $this->assertSame('Para arrendar', getPropTypeStr('lease'));
    }

    public function testPtPtAuction(): void
    {
        $this->withLang('pt_pt');
        $this->assertSame('Leilão', getPropTypeStr('auction'));
    }

    public function testPtPtForeclosure(): void
    {
        $this->withLang('pt_pt');
        $this->assertSame('Execução', getPropTypeStr('foreclosure'));
    }

    // ------------------------------------------------------------------ //
    // Spanish (spa_spa)                                                    //
    // ------------------------------------------------------------------ //

    public function testSpaSell(): void
    {
        $this->withLang('spa_spa');
        $this->assertSame('En venta', getPropTypeStr('sell'));
    }

    public function testSpaRent(): void
    {
        $this->withLang('spa_spa');
        $this->assertSame('Para alquilar', getPropTypeStr('rent'));
    }

    public function testSpaLease(): void
    {
        $this->withLang('spa_spa');
        $this->assertSame('Para arrendar', getPropTypeStr('lease'));
    }

    public function testSpaAuction(): void
    {
        $this->withLang('spa_spa');
        $this->assertSame('Subasta', getPropTypeStr('auction'));
    }

    public function testSpaForeclosure(): void
    {
        $this->withLang('spa_spa');
        $this->assertSame('Ejecución hipotecaria', getPropTypeStr('foreclosure'));
    }

    // ------------------------------------------------------------------ //
    // Unknown / fallback                                                   //
    // ------------------------------------------------------------------ //

    public function testUnknownTypeReturnsUnknown(): void
    {
        $this->withLang('en_us');
        $this->assertSame('Unknown', getPropTypeStr('freehold'));
    }

    public function testEmptyStringReturnsUnknown(): void
    {
        $this->withLang('en_us');
        $this->assertSame('Unknown', getPropTypeStr(''));
    }

    public function testNullCoercedToEmptyReturnsUnknown(): void
    {
        $this->withLang('en_us');
        // PHP switch uses loose comparison; passing '' or "unknown" both hit default.
        $this->assertSame('Unknown', getPropTypeStr('unknown'));
    }
}
