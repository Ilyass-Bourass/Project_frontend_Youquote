import React from "react";

export default function MesStatistiques() {
    // Mock data for demonstration
    const statsData = {
        totalQuotes: 24,
        totalLikes: 156,
        totalViews: 1250,
        mostLikedQuote:
            "Le succès n'est pas final, l'échec n'est pas fatal. C'est le courage de continuer qui compte.",
        categories: [
            { name: "Motivation", count: 8 },
            { name: "Inspiration", count: 6 },
            { name: "Philosophie", count: 5 },
            { name: "Humour", count: 3 },
            { name: "Autre", count: 2 },
        ],
    };

    const containerStyle = {
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "20px",
    };

    const headingStyle = {
        fontSize: "28px",
        marginBottom: "10px",
    };

    const dividerStyle = {
        borderBottom: "1px solid #ddd",
        marginBottom: "20px",
    };

    const gridContainerStyle = {
        display: "flex",
        flexWrap: "wrap",
        gap: "16px",
        marginBottom: "20px",
    };

    const cardStyle = {
        background: "white",
        borderRadius: "8px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        padding: "16px",
        width: "100%",
    };

    const summaryItemStyle = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        flex: 1,
        padding: "10px",
    };

    const summaryNumberStyle = {
        fontSize: "32px",
        fontWeight: "bold",
    };

    const summaryLabelStyle = {
        fontSize: "16px",
        color: "#555",
    };

    const quoteBoxStyle = {
        backgroundColor: "rgba(0,0,0,0.03)",
        borderLeft: "4px solid #6573c3",
        borderRadius: "4px",
        padding: "16px",
        marginTop: "12px",
        fontStyle: "italic",
    };

    return (
        <div style={containerStyle}>
            <h1 style={headingStyle}>Mes Statistiques</h1>
            <div style={dividerStyle}></div>

            {/* Summary Stats */}
            <div style={cardStyle}>
                <h2 style={{ fontSize: "20px", marginBottom: "16px" }}>
                    Résumé
                </h2>
                <div style={{ display: "flex", flexWrap: "wrap" }}>
                    <div style={summaryItemStyle}>
                        <div style={summaryNumberStyle}>
                            {statsData.totalQuotes}
                        </div>
                        <div style={summaryLabelStyle}>Citations publiées</div>
                    </div>
                    <div style={summaryItemStyle}>
                        <div style={summaryNumberStyle}>
                            {statsData.totalLikes}
                        </div>
                        <div style={summaryLabelStyle}>J'aimes reçus</div>
                    </div>
                    <div style={summaryItemStyle}>
                        <div style={summaryNumberStyle}>
                            {statsData.totalViews}
                        </div>
                        <div style={summaryLabelStyle}>Vues totales</div>
                    </div>
                </div>
            </div>

            <div style={gridContainerStyle}>
                {/* Most Liked Quote */}
                <div style={{ ...cardStyle, flex: "1 1 45%" }}>
                    <h2 style={{ fontSize: "20px", marginBottom: "16px" }}>
                        Citation la plus appréciée
                    </h2>
                    <div style={quoteBoxStyle}>
                        "{statsData.mostLikedQuote}"
                    </div>
                </div>

                {/* Categories Distribution */}
                <div style={{ ...cardStyle, flex: "1 1 45%" }}>
                    <h2 style={{ fontSize: "20px", marginBottom: "16px" }}>
                        Répartition par catégories
                    </h2>
                    <div style={{ marginTop: "12px" }}>
                        {statsData.categories.map((category, index) => (
                            <div key={index} style={{ marginBottom: "12px" }}>
                                <div style={{ fontSize: "14px" }}>
                                    {category.name}
                                </div>
                                <div
                                    style={{
                                        width: "100%",
                                        backgroundColor: "#e0e0e0",
                                        borderRadius: "4px",
                                        overflow: "hidden",
                                        marginTop: "4px",
                                        marginBottom: "4px",
                                    }}
                                >
                                    <div
                                        style={{
                                            width: `${
                                                (category.count /
                                                    statsData.totalQuotes) *
                                                100
                                            }%`,
                                            backgroundColor: "#6573c3",
                                            height: "10px",
                                        }}
                                    ></div>
                                </div>
                                <div
                                    style={{ fontSize: "12px", color: "#666" }}
                                >
                                    {category.count} citations
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Monthly Activity */}
            <div style={cardStyle}>
                <h2 style={{ fontSize: "20px", marginBottom: "16px" }}>
                    Activité des 6 derniers mois
                </h2>
                <div
                    style={{
                        height: "200px",
                        display: "flex",
                        alignItems: "flex-end",
                        justifyContent: "space-between",
                        marginTop: "16px",
                    }}
                >
                    {["Janv", "Févr", "Mars", "Avr", "Mai", "Juin"].map(
                        (month, index) => (
                            <div
                                key={index}
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    width: "16%",
                                }}
                            >
                                <div
                                    style={{
                                        height: `${
                                            Math.floor(Math.random() * 150) + 20
                                        }px`,
                                        width: "60%",
                                        backgroundColor: "#6573c3",
                                        borderRadius: "4px 4px 0 0",
                                    }}
                                ></div>
                                <div
                                    style={{
                                        marginTop: "8px",
                                        fontSize: "12px",
                                    }}
                                >
                                    {month}
                                </div>
                            </div>
                        )
                    )}
                </div>
            </div>
        </div>
    );
}
