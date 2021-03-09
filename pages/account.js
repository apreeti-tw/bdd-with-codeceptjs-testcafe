const { I } = inject();

module.exports = {
    accountUserInfo: '.account-page-user-info-item-definition',
    addNewAddressLink: '.account-page-new-address-link',
    firstname: '#address_firstname',
    lastname: '#address_lastname',
    addressLine1: '#address_address1',
    city: '#address_city',
    stateDropdown: '#address_state_id',
    postalCode: '#address_zipcode',
    phone: '#address_phone',
    saveButton: locate('input').withAttr({value: 'Save'}),
    savedAddressList: locate('address'),
    deleteIcon: locate('.delete-button'),
    deleteAddressPopUpConfirm: '#delete-address-popup-confirm',

    sendAddressDetails(user){
        I.click(this.addNewAddressLink)
        I.fillField(this.firstname, user.firstname)
        I.fillField(this.lastname, user.lastname)
        I.fillField(this.addressLine1, user.addressLine1)
        I.fillField(this.city, user.city)
        I.fillField(this.postalCode, user.postalCode)
        I.fillField(this.phone, user.phone)
        I.selectOption(this.stateDropdown, user.state)
        I.click(this.saveButton)
    },

    checkIfAddressDisplayed(user){
        const savedAddressByName = this.savedAddressList.withText(`${user.firstname} ${user.lastname}`)
        I.see(user.addressLine1, savedAddressByName)
        I.see(user.city, savedAddressByName)
        I.see(user.postalCode,savedAddressByName)
    },
}
