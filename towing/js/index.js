  $(document).ready(function() {
    $('#contact_form').bootstrapValidator({
        // To use feedback icons, ensure that you use Bootstrap v3.1.0 or later
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            first_name: {
                validators: {
                        stringLength: {
                        min: 2,
                    },
                        notEmpty: {
                        message: 'Please supply your first name'
                    }
                }
            },

	 carMake: {
		validators: {
			stringLength: {
			min: 2,
		},
			notEmpty: {
			message: 'Please supply a car make'
			}
		}
	},

	towReason: {
		validators: {
			notEmpty: {
			message: 'Please supply a tow reason'
			}
		}
	},

	carLocation: {
		validators: {
			stringLength: {
			min: 10,
		},
			notEmpty: {
			message: 'Please supply a location of the vehicle'
			}
		}
	},


	carModel: {
		validators: {
			stringLength: {
			min: 2,
		},
			notEmpty: {
			message: 'Please supply a car model'
			}
		}
	},

	carPlate: {
		validators: {
			stringLength: {
			min: 2,
		},

			notEmpty: {
			message: 'Please supply a car license plate'
			}
		}
	},

	carState: {
		validators: {
			stringLength: {
			min: 2,
		},

			notEmpty: {
			message: 'Please supply a car state'
			}
		}
	},

	carColor: {
		validators: {
			stringLength: {
			min: 2,
		},
			notEmpty: {
			message: 'Please supply a car color'
			}
		}
	},

	
          
          propertyName: {
                validators: {
                      stringLength: {
                          min: 15,
                      },
                        notEmpty: {
                          message: 'Please supply the community name'
                        }
                }
          },
          
          
             last_name: {
                validators: {
                     stringLength: {
                        min: 2,
                    },
                    notEmpty: {
                        message: 'Please supply your last name'
                    }
                }
            },
            email: {
                validators: {
                    notEmpty: {
                        message: 'Please supply your email address'
                    },
                    emailAddress: {
                        message: 'Please supply a valid email address'
                    }
                }
            },
            phone: {
                validators: {
                    notEmpty: {
                        message: 'Please supply your phone number'
                    },
                    phone: {
                        country: 'US',
                        message: 'Please supply a vaild phone number with area code'
                    }
                }
            },
            address: {
                validators: {
                     stringLength: {
                        min: 8,
                    },
                    notEmpty: {
                        message: 'Please supply your street address'
                    }
                }
            },
            city: {
                validators: {
                     stringLength: {
                        min: 4,
                    },
                    notEmpty: {
                        message: 'Please supply your city'
                    }
                }
            },
            state: {
                validators: {
                    notEmpty: {
                        message: 'Please select your state'
                    }
                }
            },
            zip: {
                validators: {
                    notEmpty: {
                        message: 'Please supply your zip code'
                    },
                    zipCode: {
                        country: 'US',
                        message: 'Please supply a vaild zip code'
                    }
                }
            },

            }
        })
        .on('success.form.bv', function(e) {
            $('#success_message').slideDown({ opacity: "show" }, "slow") // Do something ...
                $('#contact_form').data('bootstrapValidator').resetForm();

            // Prevent form submission
            e.preventDefault();

            // Get the form instance
            var $form = $(e.target);

            // Get the BootstrapValidator instance
            var bv = $form.data('bootstrapValidator');

            // Use Ajax to submit form data
            $.post($form.attr('action'), $form.serialize(), function(result) {
                console.log(result);
            }, 'json');
        });
});
