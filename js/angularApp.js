var app = angular.module('yandexNews', []);

app.controller('MainController', function ($scope, $http) {
    $scope.suggested = ['Путин', 'США', 'Порошенко', 'Украина', 'Турция', 'Сирия', 'Россия', 'Навальный', 'Шойгу', 'Чайка'];
    $scope.searchQuery = '';
    $scope.lastSearch = '';
    $scope.news = [];
    $scope.loadMore = false;
    $scope.caseOption = false;
    $scope.loading = false;
    $scope.selectedView = 'table';
    $scope.showHelp = false;

    
    $scope.selectSuggested = function (theme) {
        $scope.searchQuery = theme;
    }
    
    $scope.getNews = function (from) {
        $scope.loading = true;
        var options = ', "$options":"i"';
        if(!from) {
            var from = 0;
        }
        if ($scope.caseOption) {
            options = '';
        }
        $http.get('https://api.parse.com/1/classes/News' + '?where={"Name":{"$regex": "^' + $scope.searchQuery + '"' + options + '}}&order=-updatedAt&skip=' + from, {headers: {"X-Parse-Application-Id": "bTl4izKNMKgArfkfYUYom5bJtgW0VtOnoEQAZEPn", "X-Parse-REST-API-Key": "3tWv6UHIDorNqzYJFboRhhVzUvywLz3STVbWrO9B"}}).then(function (data) {
            if (from) {
                for (var i = 0; i < data.data.results.length; i++) {
                    $scope.news.push(data.data.results[i]);
                }
            } else {
                $scope.news = data.data.results;
            }
            if (data.data.results.length === 100) {
                $scope.loadMore = true;
                $scope.lastSearch = $scope.searchQuery;
            } else {
                $scope.loadMore = false;
            }
            $scope.loading = false;
        }, function (error) {
            console.log(error);
        });
    };
	
	//init
    $scope.getNews();
});