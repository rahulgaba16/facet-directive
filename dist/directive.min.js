/*!
 * facet-directive
 * 
 * Version: 0.0.1 - 2016-07-25T21:31:30.287Z
 * License: MIT
 */


'use strict';

angular.module('facet-search', []).directive('facet', function() {
  return {
    restrict: 'E',
    templateUrl: 'directive.html',
    scope: {
      filters: '=',
      facetClick: '=',
      facetHover: '='
    },
    link: function($scope) {
      const isFunction = (obj) => {
        return typeof obj === 'function';
      };

      const getSelectedFilters = (filters) => {
        return filters.filter((facetInfo) => {
          return facetInfo.selected;
        }).map((facetInfo) => facetInfo.name);
      };

      $scope.changeFilter = (facetFilter) => {
        const selectedFacets = getSelectedFilters($scope.filters);
        if (isFunction($scope.facetClick)) {
          $scope.facetClick(facetFilter);
        }
        $scope.$emit('FACET_CHANGED', selectedFacets);
      };
    }
  };
});

angular.module("facet-search").run(["$templateCache", function($templateCache) {$templateCache.put("directive.html","<div class=\"the-directive\"><p>Facets:</p><div ng-repeat=\"filter in filters\"><input type=\"checkbox\" ng-attr-id=\"{{filter.name}}-{{$index}}\" ng-model=\"filter.selected\" ng-change=\"changeFilter(filter)\" ng-mouseover=\"facetHover(filter)\"> <label ng-attr-for=\"{{filter.name}}-{{$index}}\">{{filter.name}}- Info: {{filter.addtionalInfo}}</label></div></div>");}]);