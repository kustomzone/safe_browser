import React from 'react';
import { mount, shallow } from 'enzyme';

import AddressBarInput from 'components/AddressBar/Input';

describe( 'AddressBarInput', () =>
{
    let wrapper;
    let instance;
    let props;

    beforeEach( () =>
    {
        props = {
            windowId           : 1,
            address            : 'about:blank',
            isSelected         : false,
            isBookmarked       : false,
            addBookmark        : jest.fn(),
            removeBookmark     : jest.fn(),
            activeTabBackwards : jest.fn(),
            activeTabForwards  : jest.fn(),
            updateActiveTab    : jest.fn(),
            onBlur             : jest.fn(),
            onSelect           : jest.fn(),
            onFocus            : jest.fn(),
            reloadPage         : jest.fn(),
            activeTab          : { isLoading: false }
        };
    } );

    describe( 'constructor( props )', () =>
    {
        beforeEach( () =>
        {
            wrapper = mount( <AddressBarInput { ...props } /> );
            instance = wrapper.instance();
        } );

        it( 'should have name AddressBarInput', () =>
        {
            expect( instance.constructor.name ).toMatch( 'Input' );
        } );
    } );
} );
