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
