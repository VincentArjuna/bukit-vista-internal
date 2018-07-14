<?php

namespace App;

use \Illuminate\Pagination\Paginator;
use Illuminate\Support\Collection;
use Illuminate\Pagination\LengthAwarePaginator;

class fnPaginate 
{
    /**
     * Gera a paginação dos itens de um array ou collection.
     * manual pagination from https://gist.github.com/vluzrmos/3ce756322702331fdf2bf414fea27bcb
    *
    * @param array|Collection      $items
    * @param int   $perPage
    * @param int  $page
    * @param array $options
    *
    * @return LengthAwarePaginator
    */
    public static function pager($items, $perPage = 20, $page = null, $options = [])
    {
        $page = $page ?: (Paginator::resolveCurrentPage() ?: 1);
        $items = $items instanceof Collection ? $items : Collection::make($items);
        return new LengthAwarePaginator($items->forPage($page, $perPage), $items->count(), $perPage, $page, $options);
    }
}
