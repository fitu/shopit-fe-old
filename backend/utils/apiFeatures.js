class APIFeatures {
    constructor(query, queryString) {
        this.query = query;
        this.queryString = queryString;
    }

    search() {
        const keyword = this.queryString.keyword ? {
            name: {
                $regex: this.queryString.keyword,
                $options: 'i'
            }
        } : {}
        
        this.query = this.query.find({ ...keyword });
        return this;
    }

    filter() {
        const queryCopy = { ...this.queryString };

        const removeFields = ['keyword', 'limit', 'page'];
        removeFields.forEach(el => delete queryCopy[el]);

        const queryStringAsString = JSON.stringify(queryCopy);
        const queryWithMongoOperators = queryStringAsString.replace(/\b(gt|gte|lt|lte)\b/g, match => `$${match}`);
        const queryStringAsObject = JSON.parse(queryWithMongoOperators);

        this.query = this.query.find(queryStringAsObject);
        return this;
    }

    pagination(resultsPerPage) {
        const currentPage = Number(this.queryString.page) || 1;
        const skip = resultsPerPage * (currentPage - 1);

        this.query = this.query.limit(resultsPerPage).skip(skip);
        return this;
    }
}

module.exports = APIFeatures;