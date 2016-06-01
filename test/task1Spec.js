/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


describe('A test for Task1 -', function () {
    describe('Function getArrayDiameter', function () {
        it('should be defined', function () {
            expect(getArrayDiameter).toBeDefined();
        });
    });

    describe('An array', function () {
        it('should be defined', function () {
            expect(arr).toBeDefined();
        });
    });

    describe('The array', function () {
        it('should have length', function () {
            expect(arr.length).toBeGreaterThan(0);
        });
    });

    describe('Function getArrayDiameter', function () {
        it('should return a number', function () {
            expect(typeof getArrayDiameter(arr)).toMatch('number');
        });
        it('should not be negative', function () {
            expect(getArrayDiameter(arr)).not.toBeLessThan(0);
        });
    });


    var mockArray = [];
    describe('mockArray', function () {
        it('should be defined', function () {
            expect(mockArray.length).toBeDefined();
        });
    });


    describe('mockArray[0,1] -', function () {
        var mockArray = [0, 1];
        describe('Function getArrayDiameter', function () {
            it('should return undefined', function () {
                expect(getArrayDiameter(mockArray)).toEqual(1);
            });
            it('should not be negative', function () {
                expect(getArrayDiameter(arr)).not.toBeLessThan(0);
            });
        });
    });
    describe('mockArray[-2,1] -', function () {
        var mockArray = [-2, 1];
        describe('Function getArrayDiameter', function () {
            it('should return undefined', function () {
                expect(getArrayDiameter(mockArray)).toEqual(3);
            });
            it('should not be negative', function () {
                expect(getArrayDiameter(arr)).not.toBeLessThan(0);
            });
        });
    });
    describe('mockArray[5,1,-2] -', function () {
        var mockArray = [5, 1, -2];
        describe('Function getArrayDiameter', function () {
            it('should return undefined', function () {
                expect(getArrayDiameter(mockArray)).toEqual(7);
            });
            it('should not be negative', function () {
                expect(getArrayDiameter(arr)).not.toBeLessThan(0);
            });
        });
    });
}); 