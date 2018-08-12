<?php

namespace App;

use \Illuminate\Pagination\Paginator;
use Illuminate\Support\Collection;
use Illuminate\Pagination\LengthAwarePaginator;

class fnPaginate 
{
    /**
     * Gera a paginação dos itens de um array ou collection.
    *
    * @param array|Collection      $items
    * @param int   $perPage
    * @param int  $page
    * @param array $options
    *
    * @return LengthAwarePaginator
    */
    public static function pager($results, $request)
    {
        //Array data you want to paginate
        //This would contain all data to be sent to the view
        $data = array();

        //Get current page form url e.g. &page=6
        $currentPage = LengthAwarePaginator::resolveCurrentPage();

        //Create a new Laravel collection from the array data
        $collection = new Collection($results);
        $collection->sortBy('created_at');

        //Define how many items we want to be visible in each page
        $per_page = 10;
        if($request->input('data.per_page')>0){
            $per_page = intval($request->input('data.per_page'));
        }
        //Slice the collection to get the items to display in current page
        //$currentPageResults = $collection->slice(($currentPage-1) * $per_page, $per_page)->all();

        //Create our paginator and add it to the data array
        $data = new LengthAwarePaginator($collection->forPage($currentPage,$per_page),$collection->count(), $per_page,$currentPage);

        //Set base url for pagination links to follow e.g custom/url?page=6
        $data->setPath($request->url());
        
        return $data;
    } 
}
