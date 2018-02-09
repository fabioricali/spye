const extend = require('defaulty');

/**
 * @class
 */
class Spye {

    /**
     * Create instance
     * @param query {Object} element that you want watch
     * @param [opts] {Object} configuration object
     * @param [opts.autoWatch=true] {boolean} auto watch
     * @param [opts.checkMs=50] {number} interval in milliseconds for every check
     * @param [opts.unwatchAfterCreate=false] {boolean} stop check after detect element creation
     * @param [opts.unwatchAfterRemove=false] {boolean} stop check after detect element remove
     */
    constructor(query, opts = {}) {

        if (typeof query !== 'string')
            throw new TypeError('Invalid selector');

        this.opts = extend.copy(opts, {
            autoWatch: true,
            checkMs: 50,
            unwatchAfterCreate: false,
            unwatchAfterRemove: false,
        });

        this.query = query;

        this._created = null;

        this._onCreate = () => {
        };

        this._onRemove = () => {
        };

        if (this.opts.autoWatch)
            this.watch();
    }

    /**
     * Check
     * @returns {Spye}
     * @ignore
     * @private
     */
    check() {
        let element = document.querySelector(this.query);
        let exists = Boolean(element);
        if (exists && !this._created) {
            this._created = true;
            this._onCreate.call(null, element, this);
            if (this.opts.unwatchAfterCreate)
                this.unwatch();
        }
        if (!exists && this._created) {
            this._created = false;
            this._onRemove.call(null, this);
            if (this.opts.unwatchAfterRemove)
                this.unwatch();
        }

        return this;
    }

    /**
     * Start watching
     * @returns {Spye}
     */
    watch() {
        this._intervalObject = setInterval(() => {
            this.check();
        }, this.opts.checkMs);
        return this;
    }

    /**
     * Stop watching
     * @returns {Spye}
     */
    unwatch() {
        clearInterval(this._intervalObject);
        this._intervalObject = null;
        return this;
    }

    /**
     * Fired when element is created
     * @param callback
     * @returns {Spye}
     */
    onCreate(callback) {
        this._onCreate = callback;
        return this;
    }

    /**
     * Fired when element is removed
     * @param callback
     * @returns {Spye}
     */
    onRemove(callback) {
        this._onRemove = callback;
        return this;
    }

}

module.exports = Spye;