<?php

declare(strict_types=1);

namespace Milosa\SocialMediaAggregatorBundle\Sites\Twitter;

trait SafeReplace
{
    /**
     * @param string $text
     * @param string $regex
     * @param string $prefix
     * @param int    $index
     *
     * @return string
     */
    private static function safeReplace(string $text, string $regex, string $prefix, int $index = 1): string
    {
        return preg_replace_callback($regex, function ($matches) use ($prefix, $index) {
            $name = htmlentities($matches[$index], ENT_QUOTES | ENT_HTML5, 'UTF-8');

            return '<a href="https://twitter.com/'.$name.'">'.$prefix.$name.'</a>';
        }, $text);
    }
}