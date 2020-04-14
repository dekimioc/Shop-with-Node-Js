exports.get404Page = (req, res, next) => {
    res.status(404).render('404page', { pageTitle: 'Page Not Found', path: "/404" });
} 