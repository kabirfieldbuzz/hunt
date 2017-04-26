module.exports = {
    company: "ThemeXpert",
    copyright: "&copy; 2010-2016 ThemeXpert Inc. All Rights Reserved.",
    getLang() {
        return {
            nav: {
                dashboard: "ড্যাশবোর্ড",
                releases: "মুক্তিপ্রাপ্ত",
                products: "পণ্য",
                settings: "সেটিংস",
                tokens: "Tokens",
                reports: "প্রতিবেদন"
            },
            auth: {
                form: {
                    login: {
                        title: "Login",
                        or: "OR",
                        email: {
                            label: "Email",
                            placeholder: "Your Email"
                        },
                        password: {
                            label: "Password",
                            placeholder: "Password"
                        },
                        remember_me: "Remember Me",
                        forgot_password: "Forgot Your Password?",
                        btn_login: "Log in",
                        dont_have_an_account: "Don't have an account?",
                        url_sign_up: "Sign Up"
                    },
                    register: {
                        title: "Sign Up",
                        name: {
                            label: "Name",
                            placeholder: "Your Name"
                        },
                        email: {
                            label: "Email",
                            placeholder: "Your Email"
                        },
                        password: {
                            label: "Password",
                            placeholder: "Password"
                        },
                        password_confirmation: {
                            label: "Confirm Password",
                            placeholder: "Password"
                        },
                        btn_sign_up: "Sign Up",
                    }
                },
                nav: {
                    login: "Login",
                    register: "Register",
                    logout: "প্রস্থান"
                }
            },
            title_text: {
                features: this.company + " এর জন্য বৈশিষ্ট্য অনুরোধ",
                product_list: this.company + " এর পণ্য তালিকা",
                reports: "বৈশিষ্ট্য প্রতিবেদন"
            },
            modal: {
                feature_request: {
                    title: "Suggest a feature for " + this.company,
                    feature: {
                        label: "Suggest a feature",
                        placeholder: "What do you have in mind ?"
                    },
                    details: {
                        label: "Add details (if you need to)",
                        placeholder: "Please keep this as details as possible ..."
                    },
                    btn_suggest: "Tell " +this.company+" I want this"
                },
                status_update: {
                    title: "Update Status",
                    subject: {
                        label: "Subject",
                        placeholder: ""
                    },
                    message: {
                        label: "Status Note",
                        placeholder: "Add some note"
                    },
                    btn_status: "Update"
                },
                effort_update: {
                    title: "Update Effort",
                    effort: {
                        label: "Effort"
                    },
                    btn_effort: "Update"
                },
                comment: {
                    title: "Add a comment",
                    comment: {
                        label: "Add Comment",
                        placeholder: "You need to add some text to your comment."
                    },
                    btn_comment: "Save comment"
                },
                new_product: {
                    title: "Add new product",
                    product: {
                        label: "Product Name",
                        placeholder: "Product Name"
                    },
                    description: {
                        label: "Add Details",
                        placeholder: "Please keep this as details as possible ..."
                    },
                    btn_product: "Save Product"
                }
            },
            search_box: "Search Feature",
            button: {
                suggest_feature: "Suggest a feature for " + this.company,
                add_product: "Add new Product",
                update_effort: "Update Effort",
                update_status: "Status Update",
                interested: "I Want This",
                not_interested: "Not Interested",
                close: "Close"

            },
            status: {
                '': "সব",
                pending: "মুলতুবি",
                wip: "চলছে",
                released: "মুক্তিপ্রাপ্ত",
                declined: "পতিত"
            },
            tooltip: {
                status: {
                    pending: "মুলতুবি",
                    wip: "চলছে",
                    released: "মুক্তিপ্রাপ্ত",
                    declined: "পতিত"
                }
            },
            no_result_message: {
                feature_requests: "No feature request found.",
                products: "No product found.",
                comments: "No comment on this feature",
                search: "No result found for this query"
            },
            panel_title: {
                action: "Action",
                feedback: "Feature Feedback",
                status_update: "Status Update",
                status: "Status",
                discussion: "Discussion",
                prepared_reports: "Prepared Reports",
                feature_filter: "Feature Filter",
                feature_tags: "Feature Tags"
            },
            panel_text: {
                action: {
                    interested: "people wants this",
                    not_interested: "not interested"
                },
                filter: {
                    any: "Any",
                    private: "Private",
                    public: "Public"
                }
            },
            table: {
                reports: {
                    value: "Value",
                    feature: "Feature",
                    status: "Status"
                }
            },
            copyright: this.copyright
        };
    }
};