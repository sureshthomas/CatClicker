$(function () {
    const CAT_COUNT = 5;
    let catArray = [];

    const catList = [
        {name: 'Oscar'},
        {name: 'Sam'},
        {name: 'Coco'},
        {name: 'Missy'},
        {name: 'Smoky'}
    ];

    class Cat {
        constructor() {
            this._id = 0;
            this._name = '';
            this._url = '';
            this._clickCount = 0;
        }

        get name() {
            return this._name;
        }

        get id() {
            return this._id;
        }

        get url() {
            return this._url;
        }

        get clickCount() {
            return this._clickCount;
        }

        set clickCount(nClick) {
            this._clickCount = nClick;
        }

        set id(id) {
            this._id = id;
        }

        set name(newName) {
            this._name = newName;
        }

        set url(imageURL) {
            this._url = imageURL;
        }
    }

    for (let i = 0; i < CAT_COUNT; i++) {
        let localCat = new Cat();
        localCat.id = `cat${i + 1}-img`;
        localCat.name = catList[i].name;
        localCat.url = `img/cat${i + 1}.jpg`;
        catArray.push(localCat);
    }


    catArray.forEach(function (cat) {

        $('#cat-container').append(`<p>${cat.name}</p>`,
            `<img id=${cat.id} src=${cat.url} alt=${cat.name}>`,
            `<p id=${cat.id}_Clk>Clicked :  ${cat.clickCount}</p>`);

        let catElementId = $(`#${cat.id}`);
        catElementId.addClass('box');
        let catIdList = $('#catListId');
        catIdList.append(`<option value="${cat.url}">${cat.name}</option>`);

        catElementId.click(function () {
            $(`#${cat.id}_Clk`).html(`Clicked :  ${++cat.clickCount}`);
        });

    });


        let catIdList = $('#catListId');
        let selectedImageFrame = $('#selectedCatImageFrame');

        selectedImageFrame.attr('src', catIdList.val() );

        catIdList.change(function () {

            //console.log(catIdList.val());

            selectedImageFrame.attr('src', catIdList.val());

        });

        selectedImageFrame.click(function () {
            // $(`#${cat.id}_Clk`).html(`Clicked :  ${++cat.clickCount}`);
            console.log(catIdList.val());
            //$(`#${cat.id}_Clk`).html(`Clicked :  ${++cat.clickCount}`);

            let cat1 = catArray.find(function (cat) {
                return catIdList.val()===cat.url;
            });

            $(`#${cat1.id}_Clk`).html(`Clicked :  ${++cat1.clickCount}`);

            //find catObject from CatArray where has same url as catIdList.val
        });

}());
