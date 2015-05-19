/**
 * Clear cookies
 */
function clearCookies() {
    document.cookie.split(";").forEach(function (c) {
        document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
    });
}

if (window._phantom) {
    if (!HTMLElement.prototype.click) {
        HTMLElement.prototype.click = function() {
            var ev = document.createEvent('MouseEvent');
            ev.initMouseEvent(
                'click',
                /*bubble*/true, /*cancelable*/true,
                window, null,
                0, 0, 0, 0, /*coordinates*/
                false, false, false, false, /*modifier keys*/
                0/*button=left*/, null
            );
            this.dispatchEvent(ev);
        };
    }
}

clearCookies();

QUnit.test('Check if extendDefaults works correctly', function (assert) {

    var result = cookieNoticeJS.extendDefaults({
            'foo': 'bar',
            'fooo': {
                'f1': 'Hello',
                'f2': 'Ciao Mondo'
            }
        },
        {
            'foo': 'barFoo',
            'fooo': {
                'f1': 'Hello World'
            }
        });

    assert.deepEqual(result, {
        "foo": "barFoo",
        'fooo': {'f1': 'Hello World', 'f2': 'Ciao Mondo'}
    }, 'extendDefaults working properly');

});

$(document).ready(function () {

    QUnit.test('Check if the notice is present', function (assert) {
        assert.strictEqual($('#cookieNotice').length, 1, 'Notice is present');
        assert.strictEqual($('#cookieNotice').find('a').length, 1, 'Notice button is present');
    });

    QUnit.test('Check that notice disappear when clicking on the Ok button', function (assert) {

        assert.expect(2);

        var done = assert.async();

        $('#cookieNotice').find('a')[0].click();

        window.setTimeout(function () {
            assert.strictEqual($('#cookieNotice').length, 0, 'Notice is gone');
            assert.notEqual(document.cookie.indexOf('cookie_notice'), -1, 'Cookie has been set');
            done();
        }, 500);

    });

    QUnit.test('Check that notice doesn\'t show up when cookie is set', function (assert) {

        cookieNoticeJS.clearInstance();
        new cookieNoticeJS();
        assert.strictEqual($('#cookieNotice').length, 0, 'Notice should not be present');

    });

    QUnit.test('And that it shows up when the cookie are cleared', function (assert) {

        clearCookies();
        cookieNoticeJS.clearInstance();
        new cookieNoticeJS();
        assert.strictEqual($('#cookieNotice').length, 1, 'Notice should be present');

    });

});
